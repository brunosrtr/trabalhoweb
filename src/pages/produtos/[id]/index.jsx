import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Produto() {
  const router = useRouter();
  const { id } = router.query;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduto(data));
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <>
      <Header />
      <main>
        <button onClick={() => router.back()}>← Voltar</button>
        <div className="produto-detalhe">
          <img src={produto.image} alt={produto.title} width={200} />
          <div>
            <h2>{produto.title}</h2>
            <p>{produto.description}</p>
            <span>R$ {produto.price}</span>
            <p><strong>Categoria:</strong> {produto.category}</p>
            <p><strong>Avaliação:</strong> {produto.rating?.rate} ({produto.rating?.count} avaliações)</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
