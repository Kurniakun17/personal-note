import React from "react";

function ArchivedButton({id, caller, archivedHandler, unarchivedHandler}){
    return (caller)?
    (<button className="dark-blue" onClick={(()=>{unarchivedHandler(id)})}>Unarchived</button>)
        :
    (<button className="dark-blue" onClick={(()=>{archivedHandler(id)})}>Archived</button>);

}

export default ArchivedButton;