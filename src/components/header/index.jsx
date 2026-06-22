import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1>Catálogo de Produtos</h1>
      </Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/criar-produto">Criar Produto</Link>
      </nav>
    </header>
  )
}
