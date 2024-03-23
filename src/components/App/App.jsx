import { useState } from "react";
import "./style.css"
import NoteList from "../NoteList/NoteList";
import AddNoteForm from "../AddNoteForm/AddNoteForm";
function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div>
      <h1>Simple Note Taking App</h1>
      <AddNoteForm onAdd={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App
