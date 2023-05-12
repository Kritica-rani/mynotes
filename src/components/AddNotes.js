import React, { useState } from "react";

const AddNotes = ({ handleAddNotes }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };
  const handleSave = () => {
    //trim removes empty spaces
    //only save notes when length is more than 0
    if (noteText.trim().length > 0) {
      handleAddNotes(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        rows={8}
        cols={10}
        placeholder="Type to add Notes"
        onChange={(e) => handleChange(e)}
        value={noteText}
      />
      <div className="note-footer">
        <button onClick={handleSave}>SAVE</button>
      </div>
    </div>
  );
};

export default AddNotes;
