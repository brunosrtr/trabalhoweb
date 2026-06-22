import React from 'react';

export default function Modal({ mensagem, onConfirmar, onCancelar }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{mensagem}</p>
        <div className="modal-botoes">
          <button onClick={onConfirmar}>Confirmar</button>
          <button onClick={onCancelar}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
