
import React, { useState } from 'react';
import './SummaryComponent.css';

const SummaryComponent = ({ selectedRace, selectedClass, characterHistory, isActive }) => {
const [charName, setCharName] = useState("")
const [isCharacterCreated, setIsCharacterCreated] = useState(false);

  const handleNameConfirm = (e) => {

    setCharName(e.target.value)
    setIsCharacterCreated(true);
    

  }
  return (
    <div className={`summary ${isActive ? 'active' : ''}`}>
      <h2>Resumo:</h2>
      <div className="space">*</div>
      <p className='raceP'>Raça: {selectedRace}</p>
      <p className="classP">Classe: {selectedClass}</p>
      <h3>História:</h3>
      <h5>{characterHistory}</h5>
      <h4>Nome do personagem:</h4>
      <label htmlFor="charName"></label>
      <input type="text" name='charName' placeholder='Como serás chamado?'  required />
      <button onClick={handleNameConfirm}>Confirmar nome</button>
        {isCharacterCreated && <p className='done'>Concluído</p>}
    </div>

  );
}

export default SummaryComponent;
