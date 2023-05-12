import React from "react";

const Note = ({ id, text, date }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <p>{date}</p>
        <p className="delete-icon">X</p>
      </div>
    </div>
  );
};

export default Note;
