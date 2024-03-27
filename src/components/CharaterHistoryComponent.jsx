import React from 'react';
import '../components/CharaterHistoryComponent.css';

const CharaterHistoryComponent = ({ setCharacterHistory }) => {
  const handleHistoryChange = (e) => {
    const text = e.target.value;
    setCharacterHistory(text);
  };

  return (
    <div className="char-background">
      <h4>História</h4>
      <p>Crie uma história (background) para seu personagem</p>
      <textarea
        name="background"
        id="background"
        placeholder="Tudo começou..."
        onChange={handleHistoryChange}
      ></textarea>
    </div>
  );
};

export default CharaterHistoryComponent;
