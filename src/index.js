import React from "react";
import ReactDOM from "react-dom/client"
import Components from "./header";


const Array = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ]  

function App() {
   
    return (
      <Components Array={Array}></Components>
    )    
}

 

var root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App></App>)


