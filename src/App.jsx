import React, { useState } from 'react';
import './App.css';
import wageIcon from "../src/assets/wizard.png";
import questIcon from "../src/assets/magic-book.png";
import RaceCreatorComponent from '../src/components/RaceCreatorComponent.jsx';
import ClasseCreatorComponent from '../src/components/ClasseCreatorComponent.jsx';
import CharaterHistoryComponent from '../src/components/CharaterHistoryComponent.jsx';
import SummaryComponent from './components/SummaryComponent.jsx';

function App() {
  const [selectedRace, setSelectedRace] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [characterHistory, setCharacterHistory] = useState("");
  
  const [showSummary, setShowSummary] = useState(false);

  const handleRaceSelection = (race) => {
    setSelectedRace(race);
  };

  const handleClassSelection = (classe) => {
    setSelectedClass(classe);
  };

  const handleConfirmButtonClick = () => {
    setShowSummary(true);
  };

  return (
    <div className="App">
      <header>
        <img src={wageIcon} alt="" />
        <h3>Wage</h3>
        <p>A project by w</p>
      </header>
      <main className="main-container">
        <div className="title">
          <h1>Gerador de Personagem</h1>
          <img src={questIcon} alt="" />
        </div>
        <div className="raceSelector">
          <RaceCreatorComponent handleRaceSelection={handleRaceSelection} />
        </div>
        <div className="classSelector">
          <ClasseCreatorComponent handleClassSelection={handleClassSelection} />
        </div>
        <div className="lore">
          <CharaterHistoryComponent setCharacterHistory={setCharacterHistory} />
        </div>
        <div className="btn">
          <button onClick={handleConfirmButtonClick}>Confirmar</button>
        </div>
        <SummaryComponent
          selectedRace={selectedRace}
          selectedClass={selectedClass}
          characterHistory={characterHistory}
          isActive={showSummary} />
      </main>
      <footer>
        <h4>
          Wage version 1.0 (only desktop v.)
        </h4>
      </footer>
    </div>
  );
}

export default App;
