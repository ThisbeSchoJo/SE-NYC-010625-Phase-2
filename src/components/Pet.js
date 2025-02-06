import { useState } from "react";

function Pet({pet, deletePet, updatePet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    const [displayForm, setDisplayForm] = useState(false)

    const [formData, setFormData] = useState({
        name: pet.name,
        image: pet.image,
        animal_type: pet.animal_type
    })

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(!displayAnimalType)
    }

    function toggleDisplayForm(event){
        event.preventDefault()

        fetch(`http://localhost:4000/pets/${pet.id}`,{
            method: "PATCH",
            headers: {
                "Content-Typer" : "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if(response.ok) {
                response.json().then(updatedPetData => updatePet(updatedPetData))
            }
            else{
                alert(`Error: Unable to update data for Pet#${pet.id}`)
            }
        })
        // const updatedPetData = {
        //     id: pet.id,
        //     ...formData,
        //     likes: pet.likes
        // }

        // updatePet(updatedPetData)
        setDisplayForm(!displayForm)
    }

    function handleLikeButtonClick(){
        const updatedPetData = {
            likes: pet.likes + 1
        }

        fetch(`http://localhost:4000/pets/${pet.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" //Because we're going to recieve a response so want to specify the type of data we're accepting
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if(response.ok){
                response.json().then(updatedPetObject => updatePet(updatedPetObject))
            }
            else{
                alert(`Error: Unable to increase number of likes for Pet #${pet.id}!`)
            }
        })
        // updatePet(updatedPetData)
    }

    function handleAdoptButtonClick(){
        fetch(`http://localhost:4000/pets/${pet.id}`, {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok){
            deletePet(pet.id)
            }
            else {
                alert(`Error: Unable to delete Pet #${pet.id}`)
            }
        })
    }

    function updateFormData(event){
        setFormData({...formData, [event.target.name] : event.target.value}) //through the event object we get access to the event.target.value bc it returns an event object
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            { displayForm ?
            <form onSubmit={toggleDisplayForm} className="edit-pet">
                <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name} />
                <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} />
                <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} />
                <button type="submit">Save Changes</button>
            </form>
            :
            <div className="button-div">
                <button onClick={toggleDisplayForm} className="update-button">Update Pet</button>
                <button onClick={handleLikeButtonClick} className="like-button">{pet.likes} Likes</button>
                <br/>
                <button onClick={handleAdoptButtonClick} className="adopt-button">Adopt</button>
            </div>
            }
        </li>
    );
}

export default Pet;


//If you want to replace a post you'd do a PUT request...
//PATCH request will just update the parts of the data that you want to change
//You can update one or more values (even all the keys) within the object with a POST request