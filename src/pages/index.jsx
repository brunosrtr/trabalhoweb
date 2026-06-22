import React, { useEffect, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Card from '@/components/card';

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProdutos(data);
        setCarregando(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <h2>Produtos</h2>
        {carregando ? (
          <p>Carregando...</p>
        ) : (
          <>
            <p>{produtos.length} itens encontrados</p>
            <div className="grid">
              {produtos.map((produto) => (
                <Card
                  key={produto.id}
                  id={produto.id}
                  title={produto.title}
                  price={produto.price}
                  imagem={produto.image}
                />
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
