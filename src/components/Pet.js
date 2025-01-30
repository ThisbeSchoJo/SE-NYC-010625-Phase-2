import {useState} from 'react'

//rerendering vs reloading the webpage:
//when you refresh the page, all the components render
//When you click a like button, only that component re-renders
//it's kind of like a re-fresh just for that component
//When you refresh the page, everything re-renders and the state resets (all the number of likes go back to zero)

function Pet({pet}){
    
    console.log(useState(0))

    //with useState we need:
    //to set the state (usually 0 or false or something) (useState(0) in example) -- what you pass to useState will be the initial value
    //something to keep the current state**? (numberOfLikes)
    //need setter function which will manage the state's information (setNumberOfLikes in example)
    const [numberOfLikes, setNumberOfLikes] = useState(0)
    //You can use const bc you're not reassigning... it's more like numberOfLikes isn't a traditional variable, it just has a state
    //You're not reassigning, you're changing the state

    //General practice is to name it "handleClick" or "handleSubmit" or "handleChange", etc
    function increaseNumberOfLikes(){
        //call setter function and pass in value (whatever the value of likes was, plus 1 so that the value plus one is going to be the new value of the state)
        setNumberOfLikes(numberOfLikes + 1)
        //This next line of code is only executing when the component is re-rendering
        //rendering pretty muchs means the values are changing under the hood... *
        console.log(`Pet # ${pet.id} number of likes: ${numberOfLikes}`)

    }


    //SECOND HALF OF LECTURE:
    const [displayName, setDisplayName] = useState(true)

    function toggleDisplayName() {
        //The parameter will always have the current state, so it get's rid of the issue
        setDisplayName((displayName) => !displayName)
        // If you called it twice... you would think they'd cancel each other out, but
        // setDisplayName(!displayName)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick= {toggleDisplayName} className={displayName ? "" : "display-animal-type"}>{displayName ? pet.name : pet.animal_type}</h4>
            {/* pass in the callback function increaseNumberOfLikes instead of putting in an arrow function to keep things cleaner */}
            <button onClick={increaseNumberOfLikes} className="like-button">{numberOfLikes} Likes</button>
        </li>
    );
}

export default Pet;


