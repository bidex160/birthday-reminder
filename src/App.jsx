import { useState } from "react";
import data from "./data";
import People from "./People";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3> {people.length} Birhday Buddy</h3>
        <People people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
