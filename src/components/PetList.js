import { useState } from 'react'
import Pet from "./Pet";

function PetList({pets, deletePet, updatePet}){

    const [isDarkMode, setIsDarkMode] = useState(false)

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet} deletePet={deletePet} isDarkMode={isDarkMode} updatePet={updatePet}/>
    })

    function toggleIsDarkMode() {
        setIsDarkMode(!isDarkMode)
    }

    const modeText = isDarkMode ? "Dark" : "Light"

    return (
        <>
            <ul className="pet-list">{petComponents}</ul>
            {/* This is a new button that was added for the Dark Mode toggle feature */}
            <button className="dark-mode-button" onClick={toggleIsDarkMode}>{modeText} Mode</button>
        </>
    );
}

export default PetList;



//If we want to make a change to all the pets, we want to move the state up a level
//This is called "lifting state"
//That state will get moved up to the parent component*

//Changing state in a parent component from a child component is done through a callback function