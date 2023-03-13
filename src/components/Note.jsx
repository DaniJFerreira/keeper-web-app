import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <Fab onClick={handleClick}><DeleteIcon /></Fab>
    </div>
  );
}

export default Note;