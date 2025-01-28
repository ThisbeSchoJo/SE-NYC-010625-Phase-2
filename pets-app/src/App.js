import logo from './logo.svg';
import './App.css';
// import IceCreamShopHeader from "./components/IceCreamShopHeader"
import Header from './components/Header';
import PetList from './components/PetList';


// const iceCreamArray = [
//   {
//     title: "Ice Cream Shop #1"
//   },
//   {
//     title: "Ice Cream Shop #2"
//   },
//   {
//     title: "Ice Cream Shop #3"
//   }
// ]

// function App() { //Usually when you first make a React App you just name it App
  
//   // const iceCreamComponents = iceCreamArray.map(iceCreamData => {
//   //   return <IceCreamShopHeader />
//   // })
//   // console.log(iceCreamComponents)

//   return ( //return is crucial for App() to be rendered
//     <div className="App">
//         {/* If you want to use tag syntax to render your component, the component needs to have a capitalized letter. If it is not capitalized, then it is a function and has to be called as a function (you almost never want to just invoke it though, almost always want to use tag syntax)*/}
//         {/* We'll generally keep our tags self closing */}
//         {/* Use tag syntax to render a component */}
//       {/* <IceCreamShopHeader /> 
//       <IceCreamShopHeader />  */}
//       <IceCreamShopHeader />
//       {/* You actually don't really need classnames or IDs anymore, other than for styling them in CSS (bc we don't have to grab elements like that anymore) */}
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

//You can make a component to improve the organization
//Every component should have a div or some other tag or some way to contain all the elements we're rendering







//Deliverables:

function App() {
  return (
    <div className="app">
      <Header />
      <PetList />
    </div>
  );
}


export default App;


