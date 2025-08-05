import { useState } from 'react';

function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <h2>{numero}</h2>
      <button onClick={() => setNumero(numero + 1)}>➕ Incrementar</button>
      <button onClick={() => setNumero(numero - 1)}>➖ Decrementar</button>
    </div>
  );
}

export default Contador;
