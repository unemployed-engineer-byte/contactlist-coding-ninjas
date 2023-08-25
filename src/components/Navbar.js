//The Navbar component is a simple navigation bar that displays a brand/link to the home page.
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand ml-5'>Contact List App</Link>
            </div>
        </nav >
    )
}

export default Navbar