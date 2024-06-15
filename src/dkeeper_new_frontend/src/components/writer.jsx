import React from "react";
import { Note_box } from "./Notes";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { dkeeper_new_backend } from "../../../declarations/dkeeper_new_backend"
import "/src/index.css"; 

 

function Write_note(){
     
    // THIS IS THE FUNCTIONALITY FOR EXPANDING.
     let [expand, setexpand] = React.useState(false);
     function expand_area(){
        setexpand(true);
    };
    
    // REACT OBJECT STATE FOR TITLE AND CONTENT.
    let [note, setNote] = React.useState({
        title:"",
        content:"",
    });
    let [addNote, setAddNote] = React.useState({
        addTitle:"",
        addContent:""
    });

    // CREATING THE TITLE AND CONTENT ARRAY. TO STORE OUR TITLE AND CONTENT IN ARRAY.
    let [noteArr, setNoteArr] = React.useState([]) ;  

    //----------------------------------------//  
    // HERE, WE ARE UPDATING REACT OBJECT STATE WITH SPREAD OPERATOR TO STORE PREVIOUS VALUE. 
    function handleTitle(event){
        setNote({
            ...note,
            title : event.target.value
        })
    };
    function handleContent(event){
        setNote({
            ...note,
            content : event.target.value
        });
    };
    //----------------------------------------//
    // HERE, AS WE CLICK THE ADD BUTTON OUR TITLE AND CONTENT WILL STORE IN AN ARRAY.
    function add_Notes(){
        // STORING THE DATA.//
        dkeeper_new_backend.storeData(note.title, note.content);
        setAddNote({
            addTitle:note.title,
            addContent:note.content
        }); 
        setNoteArr((pre)=>{
            return [note, ...pre];
        }) ;
    };
    //----------------------------------------//
    // HERE, THE SELECTED ITEM OF SELECTED ID WILL BE REMOVE FROM OUR ARRAY.
    function removeNote(id){
        console.log("Item delted");
        // DELETING DATA FROM OUR DATABASE.
        dkeeper_new_backend.removeData(id);
        setNoteArr((pre)=>{
            return pre.filter((addNote, index)=>{
                return index !== id;
            })
        })
    };
    //----------------------------------------//
    // RETRIEVING DATA OR RELOADING THE DATA.
    React.useEffect(()=>{
        console.log("Data Reloaded");
        fetchData();
    }, []);

    async function fetchData(){
        var readData = await dkeeper_new_backend.readData();
        setNoteArr(readData);
    }
    //----------------------------------------//
    return (
        <div className="box">
            <div className="writer">

            <input type="text" name="title" className="input" placeholder="Title" onClick={expand_area} onChange={handleTitle}/>
            {expand && <input type="text" name="Note" className="input" placeholder="Take a note..." onChange={handleContent}/>} 
            {expand && <Zoom in="true">
                <Fab className="btn" name="add_button" onClick={add_Notes}>
                <AddIcon />
            </Fab>
            </Zoom>}

            </div>
            <div className="note_take">
                {
                    noteArr.map((num,index)=>{
                        return (
                            <Note_box onDelete={removeNote} title={num.title} content={num.content} id={index} key={index}></Note_box>
                        )
                        
                    })
                }
                
            </div>
        
        </div>
    );
}

export {Write_note};