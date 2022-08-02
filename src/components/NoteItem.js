import React from "react";
import ItemButton from "./ItemButton";

function NoteItem({id, title, body, createdAt, unarchivedHandler, archivedHandler, deleteHandler, caller, showFormattedDate}){
    const date = showFormattedDate(createdAt);
    
    return(
        <div className="note item">
            <div id="item-title" className="item-title">
                <h4>{title}</h4>
                <h6>{date}</h6>
            </div>
            <div id="item-body" className="item-body">
                <p>{body}</p>
            </div>
            <ItemButton caller = {caller} unarchivedHandler={unarchivedHandler} archivedHandler = {archivedHandler} id={id} deleteHandler={deleteHandler}/>
        </div>
    );
}

export default NoteItem;