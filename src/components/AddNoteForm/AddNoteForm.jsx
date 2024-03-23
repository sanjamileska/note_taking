import { useState } from "react";

function AddNoteForm({ onAdd }) {
    const [note, setNote] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!note.trim()) return;
      onAdd(note);
      setNote('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your note"
        />
        <button type="submit">Add Note</button>
      </form>
    );
  }

export default AddNoteForm