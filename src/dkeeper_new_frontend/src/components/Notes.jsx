import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import "/src/index.css";

let margin = { 
    margin:"0px",
    padding:"0px"
}
 
function Note_box(props){

    function removeNote( ){
        props.onDelete(props.id);
    };

    return (
        <div className="notes">
        <h1 style={margin}>{props.title}</h1>
        <p style={margin}>{props.content}</p>
        <button className="delete_note" onClick={removeNote}>
            <DeleteIcon></DeleteIcon>
        </button>
    </div>   
    );
}

export {Note_box};

