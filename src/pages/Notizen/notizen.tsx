import { useState } from 'react';
import Note from '../../Components/Note/note';
import styles from './notizen.module.css';

function Notizen(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: 'This is my first note',
    },
    {
      id: 2,
      text: 'This is my second note',
    },
    {
      id: 3,
      text: 'This is my third note',
    },
  ]);

  function onAddNote() {
    console.log('Add');
    console.log();
  }

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={onAddNote}>
        Notiz erstellen
      </button>

      {notes.map((note) => (
        // eslint-disable-next-line react/jsx-key
        <Note id={note.id} text={note.text} />
      ))}
    </div>
  );
}

export default Notizen;
