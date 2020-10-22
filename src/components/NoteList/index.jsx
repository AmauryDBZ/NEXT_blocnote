import React, { useState, useEffect } from 'react'
import Bloc from '../Bloc';

const NoteList = () => {
  const [notes, setNotes] = useState([]);


  const displayAll = () => {
    let allNotes = [];
    for( let i = 0; i < localStorage.length; i++){
      allNotes.push([localStorage.key(i), localStorage[localStorage.key(i)]]);
    }
    setNotes(allNotes);
  }

  useEffect(() => {
    displayAll();
  }, [])

  return (
    <div>
      <h3>Liste de notes : </h3>
      {notes.map((note) => (
        <Bloc title={note[0]} note={note[1]} />
      ))}
    </div>
  )
}

export default NoteList;
