import { useState } from "react";
import NotesList from "./components/NotesList";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    {
      id: Math.random(),
      text: "Hello First Note",
      date: "12/05/2023",
    },
  ]);
  const addNotes = (text) => {
    const date = new Date();
    const newNote = {
      id: Math.random(),
      text: text,
      date: date.toLocaleString(),
    };
    // we need previous values and current value both
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList handleAddNotes={addNotes} notes={notes} />
    </div>
  );
}

export default App;
