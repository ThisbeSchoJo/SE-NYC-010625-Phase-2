import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
console.log(document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root')); //retrieving an element and passing it into a method (.createRoot) -- this is how you add elements to the DOM using JSX syntax
root.render(<App />) //the JSX syntax will only work if we pass it into render
  //whatever is returned from App() is what will be rendered in the div element with id "root" (so something must be returned in App())
  // <React.Fragment>
    // <App />
  // </React.Fragment>
  // <React.StrictMode>
  // <h1>hello world</h1>
  // <h2>goodbye world</h2> 
  // </React.StrictMode>
// );
//You can render as many elements as you want within a parent tag -- you can use React.strictMode or any other kind of tag (div)
//You can only render one element - but that one element can contain as many children as you want it to contain -- but cannot render two siblings
//Can also use <React.Fragment> </React.Fragment> instead of <React.StrictMode>

//Components are functions
//Arguments passed into the functions are called "props"
//We build components bc it provides better organization

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


