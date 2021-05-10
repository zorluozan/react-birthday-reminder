import { useState } from "react";
import data from "./data.js";

function App() {
  const [birthdays, setBirthdays] = useState(data);

  return (
    <div>
      <p id="title">{birthdays.length} birthdays today</p>
      {birthdays.map((item) => {
        return (
          <div key={item.id} id="content">
            <img src={item.image} alt="" />
            <p id="name">{item.name}</p>
            <span id="age">{item.age} years</span>
          </div>
        );
      })}
      <button id="button" onClick={() => setBirthdays([])}>
        Clear all
      </button>
    </div>
  );
}

export default App;
