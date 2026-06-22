import React from 'react';

export default function Botao({ children, type = 'button', onClick }) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}
