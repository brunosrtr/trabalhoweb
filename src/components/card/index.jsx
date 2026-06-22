import React from 'react';
import Link from 'next/link';
import Img from '@/components/img';
import Botao from '@/components/botao';

export default function Card({ id, title, price, imagem }) {
  return (
    <div className="card">
      {imagem && <Img src={imagem} alt={title} width={100} />}
      <h3><Link href={`/produtos/${id}`}>{title}</Link></h3>
      <span>R$ {price}</span>
      <Link href={`/produtos/${id}`}>
        <Botao>Ver produto</Botao>
      </Link>
    </div>
  );
}
