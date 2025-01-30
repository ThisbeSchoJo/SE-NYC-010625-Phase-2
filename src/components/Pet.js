import { useState } from "react";

function Pet({pet, deletePet, isDarkMode, updatePet}){
    // console.log(deletePet)

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(!displayAnimalType)
    }

    const darkModeClass = isDarkMode ? "dark-mode" : ""

    return (
        <li className={`pet ${darkModeClass}`}>
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            <button onClick={() => updatePet({...pet, likes: pet.likes +1})} className="like-button">{pet.likes} Likes</button>
            <button onClick={() => deletePet(pet.id)} className="adopt-button">Adopt</button>
        </li>
    );
}

export default Pet;

//Never do this in react....
//<button onClick={(event) => event.target.parentNode.remove()} className="adopt-button">Adopt</button>
//Because it's bad practice to remove React elements without removing the component itself
//Which is why we use state