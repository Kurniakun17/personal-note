import React from "react";
import ArchivedButton from "./ArchivedButton";

function ItemButton({id, archivedHandler, unarchivedHandler,deleteHandler, caller}){
    return(
        <div className="button-container flex">
            <ArchivedButton id={id} archivedHandler={archivedHandler} unarchivedHandler={unarchivedHandler} caller={caller}/>
            <button className="red" onClick={(()=>{deleteHandler(id)})}>Delete</button>
        </div>
    );
}

export default ItemButton;