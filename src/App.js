import React, { useEffect, useState } from "react"; //Hooks provided by React for managing side effects and state
import { ToastContainer } from "react-toastify";
import { Route, Routes } from 'react-router-dom';

// components imported from their respective files
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch(); //allows us to dispatch actions to the Redux store.
    //useEffect hook is used to fetch data from an external API 
    useEffect(() => {
        const data = [];
        const promise = async () => {
            await fetch('https://jsonplaceholder.typicode.com/users/')
                .then((response) => response.json())
                .then((json) => {
                    json.map((contact) => {
                        data.push({
                            id: contact.id,
                            name: contact.name,
                            number: contact.phone,
                            email: contact.email
                        });
                    })
                });
            dispatch({ type: 'FETCH_CONTACTS', payload: data });
        };
        promise();
    }, []); //empty dependency array ([]) means it runs only once when the component is mounted.


    return (
        <div className="App">
            <ToastContainer />
            <Navbar />
            {/* Routes component provides a container for defining different routes in the application. */}
            <Routes>
                {/*Route component represent individual routes in the application */}
                {/* Route with exact path "/" that renders the <Home /> component. */}
                <Route exact path="/" element={<Home />}>

                </Route>
                <Route path="/add" element={<AddContact />}>

                </Route>
                <Route path="/edit/:id" element={<EditContact />}>

                </Route>
            </Routes>
        </div>
    );
}

export default App;