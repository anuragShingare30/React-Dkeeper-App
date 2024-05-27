import React from "react";
import {Header} from "./Header";
import { Footer } from "./Footer";
import { Write_note } from "./writer";
import "/src/index.css";

function App(){
    return (<div className="content">
        <Header></Header>
        <Write_note></Write_note>
        <Footer></Footer>
    </div>);
};

export default App;