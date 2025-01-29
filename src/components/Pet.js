//The Pet component expects to recive a prop named "pet" whose value should be an object.
function Pet({pet}) {
    return(
        <li key={pet.id} className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4>{pet.name}</h4>
        </li>
    )
}

export default Pet;


//If we're using dot notation on something (i.e., pet) means that the value (i.e. of pet) should be an object