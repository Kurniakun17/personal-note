import React from "react";

function EmptyNotif({notes}){
    if(notes.length === 0){
        return(
            <div id="empty-notes">
                <h4>Notes Empty!</h4>
            </div>
        )
    }else{
        return(
            <div id="empty-notes" hidden>
                <h4>Notes Empty!</h4>
            </div>
        )
    }
}

export default EmptyNotif;