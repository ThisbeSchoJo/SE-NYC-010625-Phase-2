import Pet from "./Pet";

function PetList({pets, deletePet, updatePet}){

    const petComponents = pets.map(pet => {
        // We need to make a way that the new pets submitted in the form have an id so our code doesn't break
        return <Pet key={pet.id} pet={pet} deletePet={deletePet} updatePet={updatePet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;