import PetList from "./PetList";
import { useState, useEffect } from "react";
import Search from './Search';
import NewPetForm from "./NewPetForm";

function PetPage(){

    const [pets, setPets] = useState([])
    const [searchText, setSearchText] = useState("")

    //useEffect is a hook -- we aren't concerned with its return value so not going to assign a variable
    //You can use an anonymous function or a named function
    //the code we put in useEffect is kinda considered a side effect
    //Usually we provide a second argument with useEffect
    // console.log("before useEffect code")
    //the useEffect side effect function will get called after everything is rerendered
    useEffect(() => {
        // console.log('Executing side effect function code')
        
        //need to really understand how to use useEffect to control how often a component will rerender in response to updating a state. 
        fetch("http://localhost:4000/pets")
        .then(response => {
            if (response.ok) {
                response.json().then(petsData => setPets(petsData))
            }
            else {
                alert("Error: Unable to retrieve pets data!")
            }
        })
        
        // setPets([{
        //     id: 1,
        //     name: "Fido",
        //     iamge: "/images/dog.jpeg",
        //     animal_type: "Dog",
        //     likes: 5
        // }])
    }, [])

    //No dependency array example
    useEffect(() => {
        console.log('The side effect function was called')
    })
    //Empty dependency array example
    useEffect(() => {
        console.log('The side effect function was called')
    }, [])

    //Dependency array with searchText state exmaple
    //without the dependency array, the side effect function would get called every time the state is updated and the component rerenders
    useEffect(() => {
        console.log('The side effect function was called')
    }, [searchText]) //Adding the dependency array means the side effect function will only get called on the initial load (so once or twice)
    //If you put a stateful variable in the dependency array, the useEffect will check for any state updates from it (from searchText) - then useEffect will call the callback function when it changes. You can add in multiple stateful variables (so could also put "pets" in here but that wouldn't be good for this situation - would essentially be like not having the useEffect*)
    //how do we control how often the side effect occurs? We need a dependency array
    //(add in an empty array -- after the initial function call, we won't see the function get called any further)
    
    // console.log("after useEffect code")

    const filteredPets = pets.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    function deletePet(id){
        setPets(pets.filter(pet => {
            return pet.id !== id
        }))
    }

    function updatePet(updatedPetData){
        setPets(pets.map(pet => {
            if(pet.id === updatedPetData.id){
                return updatedPetData
            }
            else{
                return pet
            }
        }))
    }

    function addPet(newPet){
        setPets([...pets, newPet])
    }

    return (
        <main>
            <NewPetForm addPet={addPet}/>
            <Search updateSearchText={updateSearchText} searchText={searchText}/>
            <PetList pets={filteredPets} deletePet={deletePet} updatePet={updatePet}/>
        </main>
    );
}

export default PetPage;

//Notes:
//we want to be able to rerender the component when we update state, but
//we want control over when we update the state because as a side effect it will rerender the component on an endless loop (kind of a chain domino effect -- rerenders every time the page loads*)


//The useEffect hook allows us to control how often something happens