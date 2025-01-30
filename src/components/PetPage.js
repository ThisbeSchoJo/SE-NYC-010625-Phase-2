import PetList from "./PetList";
import pets from "../data/pets";
import { useState } from "react";
import Search from "./Search";

console.log(pets)

function PetPage(){

    //make a state to store the information for the adopt button (when button is clicked, page doesn't show the pet anymore -- want this to apply to all pets, not just one)
    const [searchText, setSearchText] = useState("")
    //We need to define our state for pets where we have access to the pets data (so need to put this in PetList)
    //Need to bring the state up to a level where we can capture everything that we need pets for
    const [petsState, setsPetsState] = useState(pets)


    const filteredPets = petsState.filter(pet => { //pets must be an array bc it works with filter
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    //Put this function in PetPage because petState accessible in the component
    //By moving our function up from Pet to PetPage component, the child is sending information (id) to the parent
    //This is called information flow
    function deletePet(id){
        //Filtering the petsState array
        //Filter returns a new array (don't need to use the spread operate bc filter automatically returns a new array)
        const updatedArray = petsState.filter(pet => {
            return pet.id !== id
        })
        setsPetsState(updatedArray)
    }

    function updatePet(updatedPetData){
        // console.log(updatedPetData.id)
        // console.log("New number of likes: " + (updatedPetData.likes + 1))
        // console.log("Pet's id: " + updatedPetData.id)

        const updatedArray = petsState.map(pet => {
            if(pet.id === updatedPetData.id){
                return updatedPetData
            }
            return pet
        })

        setsPetsState(updatedArray)

    }

    function updateSearchText(event){
        setSearchText(event.target.value)

    }

    return (
        <main>
            <Search updateSearchText={updateSearchText}/>
            <PetList pets={filteredPets} deletePet={deletePet} updatePet={updatePet}/>
        </main>
    );
}

export default PetPage;