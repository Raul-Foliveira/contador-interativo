import React, { useState } from 'react';
import './App.css'; 
import './index.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [suggestionIndex, setSuggestionIndex] = useState(0);

  const suggestions = [
    "Use o contador para acompanhar suas tarefas diárias.",
    "Ótimo para acompanhar quantas vezes algo aconteceu, como por exemplo, quantas vezes você bebu água hoje.",
    "Perfeito para jogos ou competições.",
    "Use para planejar suas metas de forma simples.",
  ];

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);
  const prevSuggestion = () => setSuggestionIndex((suggestionIndex - 1 + suggestions.length) % suggestions.length);
  const nextSuggestion = () => setSuggestionIndex((suggestionIndex + 1) % suggestions.length);

  return (
    <div className="container">
      <h1>Contador Interativo - React</h1>
      <p>Controle e acompanhe seu contador</p>

      <div className="counter">{count}</div>

      <div className="buttons">
        <button onClick={decrement}>Decrementar</button>
        <button onClick={reset}>Resetar</button>
        <button onClick={increment}>Incrementar</button>
      </div>

      <div className="suggestion">
        <button className="arrow" onClick={prevSuggestion}>&lt;</button>
        <div className="suggestion-text">
          <h2>Sugestão de Uso:</h2>
          <p>{suggestions[suggestionIndex]}</p>
        </div>
        <button className="arrow" onClick={nextSuggestion}>&gt;</button>
      </div>
    </div>
  );
};

export default App;
