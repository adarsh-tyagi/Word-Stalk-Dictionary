import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Definitions from "./components/Definitions";
import Header from "./components/Header";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");
  const [theme, setTheme] = useState({primaryColor: "#000", secondaryColor: "#303030", ternaryColor: "gray"})
  const [selected, setSelected] = useState("black")

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const selectTheme = (primaryColor, secondaryColor, ternaryColor) => {
    console.log("theme selected");
    setTheme({...setTheme, primaryColor: primaryColor, secondaryColor: secondaryColor, ternaryColor: ternaryColor})
  };

  const handleSelected = (name) => {
    setSelected(name)
  }

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line
  }, [word, category]);

  return (
    <div className="app">
      <div className="themes">
        <div
          className="themes__div"
          style={{ backgroundColor: "blue"}}
          onClick={() => {selectTheme("#2024fa", "#5356fc", "#8082ff"); handleSelected("blue")}}
        >
          {selected === "blue" ? (<div style={{width: "50%", height: "50%", backgroundColor: "white", margin: "auto", borderRadius: "50%"}}></div>) : ""}
        </div>
        <div
          className="themes__div"
          style={{ backgroundColor: "red" }}
          onClick={() => {selectTheme("#d40000", "#fc3838", "#ff6161"); handleSelected("red")}}
        >
          {selected === "red" ? (<div style={{width: "50%", height: "50%", backgroundColor: "white", margin: "auto", borderRadius: "50%"}}></div>) : ""}
        </div>
        <div
          className="themes__div"
          style={{ backgroundColor: "green" }}
          onClick={() => {selectTheme("#015c07", "#04c411", "#33ff41"); handleSelected("green")}}
        >
          {selected === "green" ? (<div style={{width: "50%", height: "50%", backgroundColor: "white", margin: "auto", borderRadius: "50%"}}></div>) : ""}
        </div>
        <div
          className="themes__div"
          style={{ backgroundColor: "black" }}
          onClick={() => {selectTheme("#000", "#303030", "gray"); handleSelected("black")}}
        >
          {selected === "black" ? (<div style={{width: "50%", height: "50%", backgroundColor: "white", margin: "auto" ,borderRadius: "50%"}}></div>) : ""}
        </div>
      </div>
      <Header
        word={word}
        setWord={setWord}
        category={category}
        setCategory={setCategory}
        theme={theme}
      />
      {meanings && (
        <Definitions word={word} meanings={meanings} category={category} theme={theme} />
      )}
      <div className="app__footer" style={{backgroundColor: `${theme.primaryColor}`, borderTopColor: `${theme.ternaryColor}`}}>
        <h3>Created by Adarsh Tyagi</h3>
        <p>The only place success comes before work is in the dictionary.</p>
      </div>
    </div>
  );
}

export default App;
