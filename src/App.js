import React, { useState } from "react";
import "./App.css";

const dictionary=[
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
]
function App() {
 
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();
  
 const handleSearch=e=>
   setSearch(e.target.value);
   
  const handleClick = () => {
    let found = dictionary.find
      (item => item.word.toLowerCase() === search.toLowerCase()
    );

    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary");
    }
  };
  return (
    <div className="App">
      <h1>Dictionary App</h1>

      <input
        type="text"
        value={search}
        placeholder="Search for a word..."
        onChange={handleSearch}
      />
      <button onClick={handleClick}>Search</button>
      <h4>Definition:</h4>
      <p>{result}</p>
    </div>
  );
}

export default App;
