import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setNoteArray] = useState([]);
  function addNote(note) {
    console.log(noteArray);
    setNoteArray((pre) => {
      return [...pre, note]
    });
  };
  function deleteNote(id) {
    setNoteArray(pre => (
      pre.filter((note, index) => index !== id)
    ))
  }
  return (
    <div>
      <Header />
      <CreateArea addnote={addNote} />
      {noteArray.map(
        (element, index) => (
          <Note key={index} title={element.title} content={element.content} id={index}
            deletenote={deleteNote} />
        )
      )}
      <Footer />
    </div>
  );
}

export default App;
