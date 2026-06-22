import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Modal from '@/components/modal';
import Input from '@/components/input';
import Botao from '@/components/botao';

export default function CriarProduto() {
  const router = useRouter();
  const [form, setForm] = useState({ nome: '', preco: '', descricao: '' });
  const [modalAberto, setModalAberto] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setModalAberto(true);
  }

  function handleConfirmar() {
    console.log(form);
    router.push('/');
  }

  return (
    <>
      <Header />
      <main>
        <h2>Criar Produto</h2>
        <form className="form" onSubmit={handleSubmit}>
          <Input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
          <Input name="preco" type="number" step="0.01" placeholder="Preço" value={form.preco} onChange={handleChange} required />
          <Input name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} required />
          <Botao type="submit">Salvar Produto</Botao>
        </form>
      </main>
      <Footer />

      {modalAberto && (
        <Modal
          mensagem="Deseja realmente cadastrar este produto?"
          onConfirmar={handleConfirmar}
          onCancelar={() => setModalAberto(false)}
        />
      )}
    </>
  );
}
