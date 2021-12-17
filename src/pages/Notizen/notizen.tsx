import { useState } from 'react';
import Note from '../../Components/Note/note';
import styles from './notizen.module.css';

function Notizen(): JSX.Element {
  const [notes, setNotes] = useState([
    {
      id: '1',
      text: '2 Strampler',
    },
    {
      id: '2',
      text: 'Windeln',
    },
    {
      id: '3',
      text: 'Taufe 19.12. 15:00 Uhr ',
    },
  ]);

  function onAddNote() {
    console.log('Add');
  }

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={onAddNote}>
        Notiz erstellen
      </button>
      <article className={styles.note}>
        {notes.map((note) => (
          <Note id={note.id} text={note.text} key={note.id} />
        ))}
      </article>
    </div>
  );
}

export default Notizen;
