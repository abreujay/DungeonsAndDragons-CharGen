// RaceCreatorComponent.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/RaceCreatorComponent.css'

const RaceCreatorComponent = ({ handleRaceSelection }) => {
    const [races, setRaces] = useState([]);
    const [selectedRace, setSelectedRace] = useState("");

    useEffect(() => {
        async function fetchRaces() {
            try {
                const response = await axios.get('https://www.dnd5eapi.co/api/races');
                setRaces(response.data.results);
            } catch (error) {
                console.error('Erro ao buscar raças:', error);
            }
        }

        fetchRaces();
    }, []);

    const handleChange = (e) => {
        const race = e.target.value;
        setSelectedRace(race);
        handleRaceSelection(race); 
    };

    return (
        <div className="races">
            <h4>Raças</h4>
            <p>Escolha sua raça:</p>
            <select value={selectedRace} onChange={handleChange}>
                <option value="">Selecione uma raça</option>
                {races.map((race) => (
                    <option key={race.index} value={race.index}>{race.name}</option>
                ))}
            </select>
        </div>
    );
};

export default RaceCreatorComponent;
