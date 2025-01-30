import PetList from "./PetList";
import pets from "../data/pets";

import { useState } from 'react';

console.log(pets)


//see "SyntheticBaseEvent" instead of input event like with vanilla javascript
//event.target should give you access to the element itself
//event.target.value gives you the value
function PetPage(){

    const [searchText, setSearchText] = useState("")

    const filteredPets = pets.filter(pet => {
        //Don't need this if statement bc all of the animal names include an empty string "" - so if the search bar is empty, all or the animals will be displayed
        // if(searchText === ""){
        //     return true
        // }
        //makes case insensitive and checls for partial matches
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })
    console.log(filteredPets)

    return (
        <main>
            <div className="searchbar">
                <label htmlFor="search">Search Pets:</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Type a name to search..."
                    onChange={(event) => setSearchText(event.target.value)}
                />
            </div>
            <PetList pets={filteredPets}/>
        </main>
    );
}

export default PetPage;