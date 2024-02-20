import React from "react";
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={
        () => props.deletenote(props.id)
      }>
        <PetsOutlinedIcon />
      </button>
    </div>
  );
}

export default Note;
