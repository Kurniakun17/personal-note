import React from "react";
import archivedLogo from '../assets/icons8-archive-60.png'

function ArchivedToast({notes, callArchived}){
    const filteredNote = notes.filter((note)=>(note.archived === true))
    if(filteredNote.length >= 1){
        return(
            <div className="archived-toast" onClick={callArchived}>
                <p><b>Archived</b></p>
                <img src={archivedLogo}></img>
            </div>
        );
    }else{
        return(
            <div className="archived-toast" hidden>
                <h3>Archived</h3>
                <img src={archivedLogo}></img>
            </div>
            );
    }
}

export default ArchivedToast;