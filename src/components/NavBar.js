import React from "react";

import noteLogo from '../assets/icons8-note-50.png';

function Navbar(){
    return(
        <div className="navbar-container flex">
            <div className="title-container">
                <img src={noteLogo} alt='note logo'/>
                <h1>Notes</h1>
            </div>
        </div>
    );
}

export default Navbar;