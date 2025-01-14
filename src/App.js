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
 
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState();

  const handleClick = () => {


    const found = dictionary.find(
      (item) => item.word.toLowerCase() === searchTerm.toLowerCase()
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
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={((e) => setSearchTerm(e.target.value))}
      />
      <button onClick={handleClick}>Search</button>
      <h4>Definition:</h4>
      <p>{result}</p>
    </div>
  );
}

export default App;
