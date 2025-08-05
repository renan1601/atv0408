import { useState } from 'react';

function TextoControlado() {
  const [texto, setTexto] = useState('');
  const [exibido, setExibido] = useState('');

  return (
    <div>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} />
      <button onClick={() => setExibido(texto)}>Exibir</button>
      <h1>{exibido}</h1>
    </div>
  );
}

export default TextoControlado;
