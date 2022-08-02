import React from "react";
import NoteItem from "./NoteItem";

function ActiveNoteList({notes, archivedHandler, deleteHandler, showFormattedDate}){  
    const caller = false;

    return(
        <div className="active-note-list flex">
            {
                notes.map((note)=>(
                    <NoteItem key ={note.id} caller = {caller} {...note} archivedHandler = {archivedHandler} deleteHandler={deleteHandler} showFormattedDate={showFormattedDate}/>
                ))
            }
        </div>
    );
}

export default ActiveNoteList;