import Saudacao from './components/Saudacao';
import Usuario from './components/Usuario';
import Contador from './components/Contador';
import TextoControlado from './components/TextoControlado';
import TituloColorido from './components/TituloColorido';
import Produto from './components/Produto';
import Pergunta from './components/Pergunta';

import { useState } from 'react';

function App() {
  const produtos = [
    { nome: 'Camiseta', preco: 29.9 },
    { nome: 'Calça', preco: 79.9 },
    { nome: 'Tênis', preco: 199.9 }
  ];

  const perguntas = [
    {
      enunciado: 'Qual a capital do Brasil?',
      alternativas: ['Rio de Janeiro', 'Brasília', 'São Paulo'],
      correta: 1
    },
    {
      enunciado: 'Quanto é 2 + 2?',
      alternativas: ['3', '4', '5'],
      correta: 1
    },
    {
      enunciado: 'Qual é a cor do céu em dia claro?',
      alternativas: ['Azul', 'Verde', 'Amarelo'],
      correta: 0
    }
  ];

  const [indicePergunta, setIndicePergunta] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);

  function handleResposta(acertou) {
    if (acertou) setPontuacao(p => p + 1);
    setTimeout(() => {
      setIndicePergunta(i => i + 1);
    }, 1000);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Exercícios React</h1>

      <h2>Exercício 1</h2>
      <Saudacao nome="Maria" />
      <Saudacao nome="Carlos" />

      <h2>Exercício 2</h2>
      <Usuario nome="Ana" idade={30} cidade="Recife" />

      <h2>Exercício 3</h2>
      <Contador />

      <h2>Exercício 4</h2>
      <TextoControlado />

      <h2>Exercício 5</h2>
      <TituloColorido cor="red" />
      <TituloColorido cor="blue" />

      <h2>Exercício 6</h2>
      {produtos.map((p, i) => (
        <Produto key={i} nome={p.nome} preco={p.preco} />
      ))}

      <h2>Exercício 7</h2>
      {indicePergunta < perguntas.length ? (
        <Pergunta
          {...perguntas[indicePergunta]}
          onResposta={handleResposta}
        />
      ) : (
        <h3>✅ Você acertou {pontuacao} de {perguntas.length} perguntas!</h3>
      )}
    </div>
  );
}

export default App;