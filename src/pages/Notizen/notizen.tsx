import styles from './notizen.module.css';

function Notizen() {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>Notiz erstellen</button>
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
        <textarea className={styles.notetext}></textarea>
      </label>
    </div>
  );
}

export default Notizen;
