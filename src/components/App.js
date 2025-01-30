import Header from "./Header";
import PetPage from "./PetPage";

function App() {
  return (
    <div className="app">
        <Header/>
        <PetPage/>
    </div>
  );
}

export default App;



//Notes:
//We want to be able to save our information that doesn't necessarily persist in the database
//But while the page is loaded, we want to be able to see certain info that remains
//How do we make a component re-render?
//useState can maintain data but also cause a component to re-render
//props can send different information to different renders of the same component
// Example:
{/* <Header name="Alice" />
<Header name="Bob" /> */}

//State deals with a single render of a component - the info will change in response to events
//useStates keeps track of changes in a single component and manage that info
//state is specific to a single render
//every single render of the component will have that state 
//(whereas props it depends what we pass in* - can be different for each render*)