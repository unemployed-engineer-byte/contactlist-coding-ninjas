//This code represents a React component called AddContact that provides a form to add a new contact.

import React, { useState } from 'react'; //A hook provided by React for managing state.
import { useDispatch, useSelector } from 'react-redux'; //library for accessing the Redux store and dispatching actions.
import { useNavigate } from 'react-router-dom'; //used for navigation.
import { toast } from 'react-toastify';

//This is a functional component that represents the page for adding a new contact.
const AddContact = () => {

    //These lines define state variables and their corresponding setter functions initialized with empty strings.
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    //This line uses the useSelector hook to access the contacts stored in the Redux store. 
    //It retrieves the entire state object.
    const contacts = useSelector(state => state);

    //initializes the dispatch function from the react-redux library, which allows us to dispatch actions to the Redux store.
    const dispatch = useDispatch();
    //initializes the navigate function from the react-router-dom library, which allows us to navigate to different routes.
    const navigate = useNavigate();


    //It performs form validation, checks for duplicate email and number entries, 
    //dispatches the ADD_CONTACT action with the new contact data, displays toast notifications,
    //and navigates back to the home page using the navigate function.
    const handelSubmit = e => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && email)
        const checkNumber = contacts.find(contact => contact.number === parseInt(number) && number)

        if (!email || !number || !name) {
            return toast.warning("Please fill in all fields!");
        }

        if (checkEmail) {
            return toast.error("This email already Exists!");
        }

        if (checkNumber) {
            return toast.error("This number already Exists!");
        }

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        }

        dispatch({ type: 'ADD_CONTACT', payload: data });
        toast.success("Contact added successfully!!")
        navigate('/');
    };

    return (
        <div className='container'>
            <h1 className='display-3 text-center fw-bold'>Add Contact</h1>
            <div className='row'>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <form className='text-center' onSubmit={handelSubmit}>
                        <div className='form-group mb-3'>
                            {/* The input values are bound to the state variables (name, email, and number)*/}
                            <input type='text' placeholder='Name' className='form-control'
                                value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='email' placeholder='Email' className='form-control'
                                value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='number' placeholder='Phone Number' className='form-control'
                                value={number} onChange={e => setNumber(e.target.value)} />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='submit' value='Add Contact' className='btn btn-block btn-dark' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact;