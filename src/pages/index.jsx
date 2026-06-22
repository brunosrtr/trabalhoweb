import Card from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProdutos(data));
  }, []);

  return (
    <>
      <Header />
      <main>
        <h2>Produtos</h2>
        <p>{produtos.length} itens encontrados</p>
        <div className="grid">
          {produtos.map((produto) => (
            <Card
              key={produto.id}
              id={produto.id}
              title={produto.title}
              description={produto.description}
              price={produto.price}
              imagem={produto.image}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
