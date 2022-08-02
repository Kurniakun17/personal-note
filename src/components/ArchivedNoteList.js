import React from "react";
import EmptyNotif from "./EmptyNotif";
import NoteItem from "./NoteItem";

function ArchivedNoteList({status, notes, closeArchived, unarchivedHandler, archivedHandler, deleteHandler, showFormattedDate}){
    if(notes.length === 0){
        return"";
    }

    const caller = true;
    return(status)?
    (
        <div>
            <div className="archived-note-list-container">
                <h2>Archived Notes</h2>
                <div className="archived-note-list flex">
                    {
                        notes.map((note)=>(<NoteItem key ={note.id} caller = {caller}{...note} unarchivedHandler={unarchivedHandler} archivedHandler = {archivedHandler} deleteHandler={deleteHandler} showFormattedDate={showFormattedDate}/>))
                    }
                    <button className="archived-close-button" onClick={closeArchived}>Close</button>
                </div>
            </div>
        </div>
    )   :"";
}

export default ArchivedNoteList;