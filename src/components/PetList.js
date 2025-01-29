import Pet from "./Pet"


//With destructing we can make a parameter for each of the key value pairs -- this whole object though will count as just one parameter)
function PetList({pets}){

    
    const petLiElements = pets.map(pet=> {
        // console.log(pet.name)
        return (
            <Pet key={pet.id} pet={pet}/>
            // <li key={pet.id} className="pet">
            //     <img src={pet.image} alt={pet.anme}/>
            //     <h4>{pet.name}</h4>
            // </li>
        )
    })
    //Destructuring lets you assign variables to props (kind of taking things out of an object**)
    //Creating a varaiable for each key and value pair
    //This will make things easier for us bc
    // const {pets} = props
    // console.log(pets)

    //Can use dot notation or square brackets to access the value
    // console.log(props)
    // console.log(props.pets)
    // console.log(props['greeting'])
    return (
        <ul className="pet-list">{petLiElements}</ul>
    );
}

export default PetList;

//Can destructure outside of the parameter or inside the parameter
//destructuring outside of parameter:
    // const {pets} = props
//destructuring inside the parameter:
    // function PetList({pets}){


//Key value often can be id key
//If you don't have it, you could use the index of the item in the list, but it's not BEST practice