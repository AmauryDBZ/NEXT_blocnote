import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import NoteList from './components/NoteList';
import './index.scss';

const App = () => {
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');

  const handleNote = (value) => {
    setNote(value.note);
    setTitle(value.title);
  }

  return (
    <div className="container">
      <div className="display-notes">
        <NoteList />
      </div>
      <div className="display-input">
        <div>
          <NoteDisplay text={note} title={title} />
        </div>
        <hr />
        <div>
          <MarkdownInput onChange={(value) => handleNote(value)} />
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));
