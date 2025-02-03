import { v4 as uuid } from "uuid";
import { useState } from 'react';

function NewPetForm({addPet}) {

    //The state should be an object bc the new pet data will be an object

    const [formData, setFormData] = useState({
      name: "",
      image: "",
      animal_type: ""
    })
    // console.log(formData)
    // const [name, setName] = useState("")
    // const [image, setImage] = useState("")
    // const [animal_type, setAnimal_type] = useState("")

    function handleSubmit(event){
      event.preventDefault()

      const newPet = {
        id: uuid(),
        ...formData,
        // name: formData.name,
        // image: formData.image,
        // animal_type: formData.animal_type,
        likes: 0
      }

      // console.log(newPet)
      addPet(newPet)
    }

    // function updateName(event){
    //   setName(event.target.value) 
    //   console.log(event.target.value)
    //   console.log({
    //     [event.target.name]: event.target.value
    //   })
    // }

    // function updateImage(event){
    //   setImage(event.target.value) 
    //   console.log(event.target.value)
    //   console.log({
    //     [event.target.name]: event.target.value
    //   })
    // }

    // function updateAnimalType(event){
    //   setAnimal_type(event.target.value) 
    //   console.log(event.target.value)
    //   console.log({
    //     [event.target.name]: event.target.value
    //   })
    // }

    function updateFormData(event){
      setFormData({
        ...formData,
        [event.target.name] : event.target.value
      })
      // console.log(event.target.name)
      // console.log(event.target.value)

      // console.log({
      //   //Key needs to be in square brackets so we can retrieve it because of the periods*
        // [event.target.name] : event.target.value
      // })
    }

    return (
      <div className="new-pet-form">
        <h2>New Pet</h2>
        {/* In past we have used input (and we still might) but using onSubmit here */}
        <form onSubmit={handleSubmit}>
          <input onChange={updateFormData} type="text" name="name" value={formData.name} placeholder="Pet name" required/>
          <input onChange={updateFormData} type="text" name="image"  value={formData.image} placeholder="Image URL" required/>
          <input onChange={updateFormData} type="text" name="animal_type" value={formData.animal_type} placeholder="Animal type" required/>
          <button type="submit">Add Pet</button>
        </form>
      </div>
    );
  }
  
  export default NewPetForm;

  //Difference between controlled and uncontrolled inputs:
  //The state just holds the input - we are controlling the state by typing into the box,
  //but we also want the input to be controlled by the state
  //As long as we can change our state to a new value, the value of the input will change
  //We want a dynamic value that we can control with state
  //How we have it currently, as long as the state never changes, the value will never change 

  //Why do we want to use state to control the value of the input?
  //Bc it's more concise and leaves less room for error. We can directly see the value of the state (the value they input*)

  //If you control your input with state, you don't need to console.log the value bc you can see the value directly on the page (so it's helpful to the user and the developer)