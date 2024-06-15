import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { AuthClient } from "@dfinity/auth-client";
import "./index.css";


let init = async ()=>{
  var authClient = await AuthClient.create();

  if(await authClient.isAuthenticated()){
    handleAuthenticated(authClient);  
  }
  else{
    await authClient.login({
      identityProvider:"",
      onSuccess:()=>{
        handleAuthenticated(authClient);
      }
    });
  };

  async function handleAuthenticated(authClient){
    ReactDOM.createRoot(document.body.querySelector(".main")).render(
      <App></App>
    );
  };
}

init();



















ReactDOM.createRoot(document.body.querySelector(".main")).render(
  <App></App>
);