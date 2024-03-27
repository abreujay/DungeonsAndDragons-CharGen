
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/ClasseCreatorComponent.css'

const ClasseCreatorComponent = ({ handleClassSelection }) => {
    const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState("");

    useEffect(() => {
        async function fetchClasses() {
            try {
                const response = await axios.get('https://www.dnd5eapi.co/api/classes');
                setClasses(response.data.results);
            } catch (error) {
                console.error('Erro ao buscar classes:', error);
            }
        }

        fetchClasses();
    }, []);

    const handleChange = (e) => {
        const classe = e.target.value;
        setSelectedClass(classe);
        handleClassSelection(classe); // Chama a função do componente pai
    };

    return (
        <div className='classes'>
        <h4>Classes</h4>
        <p>Escolha sua classe:</p>
        <select value={selectedClass} onChange={handleChange}>
            <option value="">Selecione uma classe</option>
            {classes.map((charClass) => (
                <option key={charClass.index} value={charClass.index}>{charClass.name}</option>
            ))}
        </select>
    </div>
);
};

export default ClasseCreatorComponent;

