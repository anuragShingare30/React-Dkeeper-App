import "/src/index.css";
import React from "react";

let date = new Date();
let year = date.getFullYear();
function Footer(){
    return <footer className="footer">
    
        <p>Copyright © {year}</p>
    </footer>
}

export {Footer};