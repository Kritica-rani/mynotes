import React from "react";
import AddNotes from "./AddNotes";
import Note from "./Note";

const NotesList = ({ handleAddNotes, notes }) => {
  return (
    <div className="notes-list">
      {notes.map((item) => {
        return <Note id={item.id} text={item.text} date={item.date} />;
      })}
      <AddNotes handleAddNotes={handleAddNotes} />
    </div>
  );
};

export default NotesList;
