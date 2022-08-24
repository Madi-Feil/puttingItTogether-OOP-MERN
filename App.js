import React from "react";
import PersonCard from "./components/PersonCard";
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard
      lastName={"Greeley"}
      firstName={"Madi"}
      age={22}
      hair={"red"}
      />
      <PersonCard
      lastName={"Greeley"}
      firstName={"Blake"}
      age={26}
      hair={"none"}
      />
      <PersonCard 
      lastName={"Greeley"}
      firstName={"Willow"}
      age={1}
      hair={"black"}
      />
      <PersonCard
      lastName={"Greeley"}
      firstName={"Choji"}
      age={1}
      hair={"white and brown"}
      />
    </div>
  );
}

export default App;
