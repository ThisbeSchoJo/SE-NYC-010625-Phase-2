import Header from "./Header";
import PetList from "./PetList";
import { useState, useEffect } from "react";
import NewPetForm from "./NewPetForm";
import ErrorPage from "./ErrorPage";
import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"

function App(){

    //window.location.pathname will show us the pathname that we're currently on
    //i.e.: if the href is "http://localhost:3000/", such that the origin is "http://localhost:3000/"
    // then the pathname is "/"
    // And if the href is "http://localhost:3000/hello", then the pathname is "/hello"
    //Reassigning a pathway to window.location.pathname is not the best solution bc it will cause the page to refresh*
    //React router makes it so we don't have to refresh the page, and will stay on the same page, but will render a different component
    //window.history has a state
      //if you change it, it allows you to naviaget to another page but doesn't refresh
      //.pushState() takes three parameters
      //first two you don't really need to worry about 
      //third one is the pathname/endpoint we want to navigate to -- gets tacked onto the origin and the old pathname is removed
      //window.history.pushState(null, "", "/goodbye") >>> http://localhost:3000/goodbye
      //the href is something we will get from the a tag
      //we want to make sure the pathname works for the entire url
      //with pushState we can provide either the entire url or just the pathname and both will work

      // console.log(window.location.pathname)

    const [pets, setPets] = useState([]);

    //path will update to whatever pathname we want to be on (route is also a good name but the route will basicallly be ... something slightly different)
    const [path, setPath] = useState("window.location.pathname")

    let component = <ErrorPage />
    if(window.location.pathname === "/"){
      component = <PetList pets={pets}/>
    }
    else if(window.location.pathname === "/add_pet"){
      component = <NewPetForm addPet={addPet}/>
    } //we always want a NavBar to navigate to the other pages
    




    useEffect(() => {
        fetch('http://localhost:4000/pets')
        .then(response => response.json())
        .then(petsData => setPets(petsData))
    }, []);

    function deletePet(id){
        fetch(`http://localhost:4000/pets/${id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                setPets((pets) => pets.filter(pet => {
                    return pet.id !== id
                }))
            }
            else{
                alert("Error: Unable to delete pet!")
            }
        })
    }

    function addPet(newPet){
        fetch('http://localhost:4000/pets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...newPet, likes: 0})
        })
        .then(response => response.json())
        .then(newPetData => setPets([...pets, newPetData]))
    }

    function updatePet(id, petDataForUpdate){
        fetch(`http://localhost:4000/pets/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(petDataForUpdate)
        })
        .then(response => response.json())
        .then(updatedPet => setPets(pets => pets.map(pet => {
            if(updatedPet.id === pet.id){
                return updatedPet
            }
            else{
                return pet
            }
        })))
    }

    // function navigate(event) {
    //   event.preventDefault()
    //   window.history.pushState(null, "", event.target.href)
    //   setPath(window.location.pathname)
    // }
    // const firstATagClass = (path === "/") ? "active" : ""
    // const secondATagClass = (path === "/add_pet") ? "active" : ""

    return (
      <div className="app">
        {/* <nav className="navbar">
          <a onClick={navigate} href="/" className={firstATagClass}>Home</a>
          <a onClick={navigate} href="/add_pet" className={secondATagClass}>Add Pet</a>
        </nav> */}
        <NavBar />
        <Header />
        <Outlet context={{
          pets: pets,
          addPet: addPet,
          updatePet: updatePet,
          deletePet: deletePet
        }} />
        {/* {component} */}
        {/* <NewPetForm addPet={addPet}/> */}
        {/* <PetList pets={pets}/> */}
      </div>
    );
}

export default App;


//Notes:
//Way to navigate to different pages
//if the interenet is down, you can't make a request to the server
//if you use client side routing, you have access to all your components
//so you can access them when the internet is down
//you just load them the first time, and then you're not waiting for them to load again


//declarative > imperative 
//(using a library or some dependency is better)

//conditional rendering = allows us to choose what we're going to render depending on the path (which components get rendered)

//the window object gives us access to a lot of things
//href is the whole link/url
//window.location.pathname is basically the endpoint of the url
  //this is the part that is changing, and the part we want to focus on

//window.location.origin is the home page -- the base page -- the initial page
