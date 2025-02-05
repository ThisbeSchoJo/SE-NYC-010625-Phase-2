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
//What are side effects?
//Side effects are operations taht are not directly related to the final output of the function
//anything that's extra
//For example, updating state rerenders the DOM (the rerendering is a side effect*)
//useEffect is used to control when a certain side effect occurs
//An example of being able to control a side effect,
//side effects of submitting a form is refreshing the page, so one example of controlling the side effect is the prevent default