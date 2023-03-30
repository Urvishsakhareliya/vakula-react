import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import "./style.css";
 
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbars from "./Navbars";
import Herosection from "./Herosection";
 

const root = ReactDOM.createRoot(document.getElementById("root"));
 
  
root.render( 
  <>
    <Navbars /> 
 <Herosection/>
 </>
        
  
);

reportWebVitals();
