import React from "react";
import ArchivedNoteList from "./ArchivedNoteList";

function ArchivedNoteContainer({status, notes, closeArchived, unarchivedHandler, archivedHandler, deleteHandler, closeHandler, showFormattedDate}){
    const filteredNote = notes.filter((note)=>note.archived === true);
    return(
        <div className="archived-note-container item">
            <ArchivedNoteList showFormattedDate={showFormattedDate}closeArchived = {closeArchived} notes = {filteredNote} status = {status} unarchivedHandler={unarchivedHandler}archivedHandler = {archivedHandler} deleteHandler = {deleteHandler} closeHandler = {closeHandler}/>
        </div>
    );
}

export default ArchivedNoteContainer;