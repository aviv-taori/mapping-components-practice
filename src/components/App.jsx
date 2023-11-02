import React from "react";
import Header from "./Header1" 
import Entry from "./Entry"
import emojipedia from "../emojipedia.js"

function creatEntry (teamEmoji) {
  return(
  <Entry
        key={teamEmoji.id}
        emoji={teamEmoji.emoji}
        name={teamEmoji.name}
        meaning={teamEmoji.meaning}
       />
       )
}



function App() {
  return (
    <div>
      <Header />
      <dl className="dictionary">
      {emojipedia.map(creatEntry)}
      </dl>
      
      
      

      
    </div>
  );
}

export default App;
