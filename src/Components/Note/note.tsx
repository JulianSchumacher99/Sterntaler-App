import styles from './note.module.css';

type NoteProps = {
  id: number;
  text: string;
};

function Note({ id, text }: NoteProps): JSX.Element {
  return (
    <label className={styles.note}>
      <div className={styles.noteheader}>
        <img
          className={styles.icon}
          src="src/assets/icons8-edit (1).svg"
          alt=""
        />
        <img
          className={styles.icon}
          src="src/assets/icons8-trash (1).svg"
          alt=""
        />
      </div>
      <textarea className={styles.notetext} value={text} readOnly></textarea>
    </label>
  );
}

export default Note;
