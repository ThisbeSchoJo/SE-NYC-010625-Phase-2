import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './components/App';
// import NavBar from "./components/NavBar";
// import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import PetList from "./components/PetList";
import NewPetForm from "./components/NewPetForm";
import PetProfile from "./components/PetProfile"

import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom"

//a router has the info for various routes
const router = createBrowserRouter([
    //each of the following objects we call a "route"
    {   //provide the path -- this is where we're trying to navigate to
        path: "/",
        //this tells it what to render
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <PetList />
            },
            {
                path: "/add_pet",
                element: <NewPetForm />
            },
            { //Colon is a "wild card" where you can put anything there (other than a slash)
                //We really only use the wild cards when we need to use them...***
                path: "/profile/:id",
                element: <PetProfile />
            }
        ]
    },
    

])

const root = ReactDOM.createRoot(document.getElementById('root'));
//RouterProvider allows you to render different components based on your route**
root.render(<RouterProvider router={router}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();