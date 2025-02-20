import React from "react";
import ReactDOM from "react-dom/client"
import Navigation from "./header";


function App() {
    return (
   <React.Fragment>
    <Navigation name="Sandro"  lastname="Gabodze"> </Navigation>
   </React.Fragment>
    )    
}

 

var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


