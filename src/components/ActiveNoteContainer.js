import React from "react";
import ActiveNoteList from "./ActiveNoteList";
import EmptyNotif from "./EmptyNotif";

function ActiveNoteContainer({notes, archivedHandler, deleteHandler, showFormattedDate}){
    const note = notes.filter((note)=>(note.archived === false))
    return(
        <div className="active-note-container item">
            <h2>Active Notes</h2>
            <EmptyNotif notes = {note}/>
            <ActiveNoteList showFormattedDate={showFormattedDate} notes = {note} archivedHandler={archivedHandler} deleteHandler={deleteHandler}/>
        </div>
    );
}

export default ActiveNoteContainer;