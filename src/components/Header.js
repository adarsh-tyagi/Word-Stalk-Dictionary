import React from "react";
import "./Header.css";
import categories from "../data/category";

function Header({ word, setWord, category, setCategory, theme }) {
    const handleChange = (language) => {
        setCategory(language)
        setWord("")
    }

  return (
    <div className="header">
      <h1 className="header__title" style={{color: `${theme.primaryColor}`}}>{word ? word : `Word Stalk`}</h1>
      <div className="header__content">
        <input type="text" placeholder="Search..." value={word} onChange={(e) => setWord(e.target.value)} style={{borderBottomColor: `${theme.primaryColor}`, color: `${theme.primaryColor}`}} />
        <select value={category} onChange={(e) => handleChange(e.target.value)} style={{borderBottomColor: `${theme.primaryColor}`, color: `${theme.primaryColor}`}}>
            {categories.map((item) => (
                <option key={item.label} value={item.label}>{item.value}</option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default Header;
