import React, { useState } from 'react';
import NoteDisplay from '../NoteDisplay';
import NoteList from '../NoteList';

const MarkdownInput = (note) => {
  const [input, setInput] = useState([]);

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  note.onChange(input);

  const saveNote = (e) => {
    //e.preventDefault();
    localStorage.setItem(input.title, input.note);
    e.currentTarget.name = "";
    e.currentTarget.value = "";
  }

  return (
    <div>
      <div>
        <form>
          <div>
            <label>Titre :</label>
            <input type="text" name="title" onChange={handleInputChange} />
          </div>
          <div>
            <label>Note : </label>
            <textarea type="text" name="note" onChange={handleInputChange} />
          </div>
          <button type="submit" onClick={(e) => saveNote(e)}>Enregistrer</button>
        </form>
      </div>
    </div>
  )
}

export default MarkdownInput;
