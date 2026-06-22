import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function CriarProduto() {
  const [form, setForm] = useState({ nome: '', preco: '', descricao: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <>
      <Header />
      <main>
        <h2>Criar Produto</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
          <input name="preco" type="number" step="0.01" placeholder="Preço" value={form.preco} onChange={handleChange} required />
          <input name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} required />
          <button type="submit">Criar</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
