import styles from './note.module.css';
import edit from '../../assets/icons8-edit.svg';
import trash from '../../assets/icons8-trash.svg';

type NoteProps = {
  id: string;
  text: string;
};

function Note({ id, text }: NoteProps): JSX.Element {
  return (
    <label className={styles.note}>
      <div className={styles.noteheader}>
        <img className={styles.icon} src={edit} alt="" />
        <img className={styles.icon} src={trash} alt="" />
      </div>
      <textarea id={id} className={styles.notetext} value={text}></textarea>
    </label>
  );
}

export default Note;
