import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; //used to create links for navigation within the application.
import { toast } from 'react-toastify';

//A react component called Home displays a list of contacts and provides functionality to add, edit, and delete contacts.
const Home = () => {

    //useSelector hook to access the contacts stored in the Redux store.
    const contacts = useSelector(state => state);

    // useDispatch function allows us to dispatch actions to the Redux store.
    const dispatch = useDispatch();

    //This function is triggered when a delete button is clicked
    //It dispatches the DELETE_CONTACT action with the id of the contact to be deleted as the payload.
    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        toast.success('Contact deleted successfully!');
    }

    //The JSX code within the return statement represents the structure and content of the home page.
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 my-5 text-end'>
                    <Link to='/add' className='btn btn-outline-dark'>Add Contact</Link>
                </div>
                <div className='col-md-10 mx-auto'>
                    <table className='table table-hover'>
                        <thead className='text-white bg-dark text-center'>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>Number</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        {/* The table body (<tbody>) dynamically renders rows for each contact in the contacts array retrieved from the Redux store. */}
                        <tbody>
                            {
                                contacts.map((contact, id) => (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                            <Link to={`/edit/${contact.id}`} className='btn btn-small btn-primary me-2'>Edit</Link>
                                            {/* The delete button triggers the deleteContact function when clicked, passing the contact's id as an argument. */}
                                            <button type='button' onClick={() => deleteContact(contact.id)} className='btn btn-small btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Home;