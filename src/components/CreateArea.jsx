import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
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
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={changeNote}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={changeNote}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.addnote(note);
            setNote({
              title: "",
              content: "",
            });
          }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
