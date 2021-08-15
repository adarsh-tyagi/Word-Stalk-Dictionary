import React from "react";
import "./Definitions.css";

function Definitions({ word, meanings, category, theme }) {
  return (
    <div className="definition" style={{borderColor: `${theme.ternaryColor}`}}>
      {meanings[0] && word && category === "en" && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser doesn't support audio element.
        </audio>
      )}
      {word === "" ? (
        <p className="definition__msg" style={{color: `${theme.primaryColor}`}}>Start by typing the word in search.</p>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div className="definition__content">
                <p className="definition__contentOne" style={{color: `${theme.primaryColor}`}}>{def.definition}</p>
                {def.example && (
                  <p className="definition__contentSecond" style={{color: `${theme.secondaryColor}`}}>
                    <span>Example: </span>{def.example}
                  </p>
                )}
                {def.synonyms && (
                  <p className="definition__contentSecond" style={{color: `${theme.secondaryColor}`}}>
                    <span>Synonyms: </span>{def.synonyms.map((s) => `${s}, `)}
                  </p>
                )}
                <hr style={{color: `${theme.primaryColor}`}} />
              </div>
            ))
          )
        )
      )}
    </div>
  );
}

export default Definitions;
