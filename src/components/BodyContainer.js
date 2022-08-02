import React from "react";
import AddNote from "./AddNote";
import ActiveNoteContainer from "./ActiveNoteContainer";
import Archived from "./ArchivedToast";
import ArchivedToast from "./ArchivedToast";
import ArchivedNoteContainer from "./ArchivedNoteContainer";

function BodyContainer({notes, closeArchived, addnote, callArchived, unarchivedHandler, archivedHandler, deleteHandler, status, showFormattedDate, closeHandler}){
    return(
        <div className="body flex">
            <AddNote addnote = {addnote}/>
            <ActiveNoteContainer showFormattedDate={showFormattedDate} notes = {notes} deleteHandler={deleteHandler} unarchivedHandler={unarchivedHandler} archivedHandler = {archivedHandler}/>
            <ArchivedToast callArchived = {callArchived} notes = {notes}/>
            <ArchivedNoteContainer showFormattedDate={showFormattedDate} unarchivedHandler={unarchivedHandler} closeArchived={closeArchived} status = {status} notes={notes} archivedHandler={archivedHandler} deleteHandler={deleteHandler} closeHandler={closeHandler}/>
        </div>
    );
}

export default BodyContainer;