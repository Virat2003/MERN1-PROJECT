import React from 'react'
import {IconButton} from "@mui/material"
import {Search, Person, Menu} from "@mui/icons-material"
import variables from "../styles/variables.css"
import { useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import "../styles/Navbar.css"
import { Link } from "react-router-dom"
import { setLogout } from "../redux/state";

 const Navbar = () => {
    const [dropdownMenu, setDropdownMenu] = useState(false);

    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

  return (
    <div className='navbar'>
        <a href='/'>
        <img src="/assests/logo.png" alt="logo" />
        </a>

        <div className='navbar_search'>
            <input type="text" placeholder='Search..'/>
            <IconButton>
                <Search sx={{ color:variables.pinkred }} />
            </IconButton>
        </div>

        <div className="navbar_right">
            {user ? (
                    <a href="/create-listing" className='host'>Become A Host</a>
        ) : (
          <a href="/login" className='host'>Become A Host</a>
        )}

        <button className='navbar_right_account' onClick={()=>setDropdownMenu(!dropdownMenu)}>
            <Menu sx={{ color:variables.darkgrey }}/>
            {!user ?
            
            <Person sx={{ color:variables.darkgrey }}/>
            : (
            <img src={`http://localhost:3001/${user.profileImagePath.replace("public", "")}`}alt="profile photo" style={{ objectFit: "cover", borderRadius: "50%" }} />
          )}
        </button>
        
        {dropdownMenu && !user && (
          <div className="navbar_right_accountmenu">
            <Link to="/login">Log In</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        )}

        {dropdownMenu && user && (
            <div className="navbar_right_accountmenu">
                <Link to="">bookingList</Link>
                <Link to="">spaceList</Link>
                <Link to="">Create Listing</Link>

                <Link to="/login" onClick={()=>{
                    dispatch(setLogout())
                }}>Log Out</Link>
            </div>
        )}


    </div>
</div>
)
}
export default Navbar
