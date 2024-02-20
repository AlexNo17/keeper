import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [checked, setChecked] = useState(false);
  function changeChecked() {
    setChecked(true);
  };
  function changeNote(e) {
    const { name, value } = e.target;
    setNote((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  }
  return (
    <div>
      <form>
        {checked &&
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={changeNote}
          />
        }
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={checked ? 3 : 1}
          value={note.content}
          onChange={changeNote}
          onClick={changeChecked}
        />
        <Zoom in={checked}>
          <button
            onClick={(e) => {
              e.preventDefault();
              props.addnote(note);
              setNote({
                title: "",
                content: "",
              });
            }}>
            <AddIcon />

          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
