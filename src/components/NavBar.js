import { NavLink } from "react-router-dom"


function NavBar(){
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add_pet">Add Pet</NavLink>
            {/* NavLink does everything else... even sets the className to "active" or "" depending on if we're on it */}
            {/* <a onClick={navigate} href="/" className={firstATagClass}>Home</a>
            <a onClick={navigate} href="/add_pet" className={secondATagClass}>Add Pet</a> */}
        </nav>
    )
}

export default NavBar