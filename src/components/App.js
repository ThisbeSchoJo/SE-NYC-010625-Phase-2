import Header from "./Header";
import PetList from "./PetList";

import {pets} from "../data/petsData";

// console.log(pets);

function App() {
  return (
    <div className="app">
        <Header/>
        <PetList pets={pets} />
        {/* {PetList({pets, greeting:'hello world'})} */}
        {/* <PetList pets={pets} greeting="hello world"/>  */}
    </div>
  );
}

export default App;


//Notes
//You could call a function in a component by calling it: {PetList()} --- but this isn't best practice
//We can assign the vlaue of a prop to a string (without curly braces) but if it's any other value or data type, then you have to put it in a { }

//Do's and Don'ts
//Don't pretend you've recieved the array and go from there -- instead, console log the array first and go from there

//You can use dot notation or brackets to access the value on a prop (bc it's an object)