import React from 'react';
import MarkdownInput from '../MarkdownInput';
import Showdown from "showdown";
const converter = new Showdown.Converter();


const NoteDisplay = ({title, text}) => {

  return (
    <div>
      <h3>Titre : {title}</h3>
      <p>Note : {text}</p>
    </div>
  )
}

export default NoteDisplay;
