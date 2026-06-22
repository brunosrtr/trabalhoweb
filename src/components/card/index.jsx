import React from 'react'
import Link from 'next/link'

export default function Card({ id, title, description, price, imagem }) {
  return (
    <div className="card">
      {imagem && <img src={imagem} alt={title} width={100} />}
      <h3><Link href={`/produtos/${id}`}>{title}</Link></h3>
      <p>{description}</p>
      <span>R$ {price}</span>
      <Link href={`/produtos/${id}`}>Ver produto</Link>
    </div>
  )
}
