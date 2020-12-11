import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";


function App(){
  return ( 
    <React.Fragment>
      <NavBar />
      <div className="container">
      <Header />
      </div>
    </React.Fragment>
  );
}

export default App;