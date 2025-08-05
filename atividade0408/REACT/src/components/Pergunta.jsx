import { useState } from 'react';

function Pergunta({ enunciado, alternativas, correta, onResposta }) {
  const [respondido, setRespondido] = useState(false);
  const [acertou, setAcertou] = useState(null);

  function verificarResposta(indice) {
    if (!respondido) {
      const estaCorreta = indice === correta;
      setRespondido(true);
      setAcertou(estaCorreta);
      onResposta(estaCorreta);
    }
  }

  return (
    <div>
      <h3>{enunciado}</h3>
      {alternativas.map((alt, index) => (
        <button key={index} onClick={() => verificarResposta(index)}>
          {alt}
        </button>
      ))}
      {respondido && (
        <p>{acertou ? '✅ Correto!' : '❌ Errado!'}</p>
      )}
    </div>
  );
}

export default Pergunta;
