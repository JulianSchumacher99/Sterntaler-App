import styles from './footer.module.css';

function Footer(): JSX.Element {
  return (
    <div className={styles.container}>
      <a className={styles.iconlink} href="/musik">
        <img className={styles.icon} src="src/assets/icons8-music.svg" alt="" />
      </a>
      <a className={styles.iconlink} href="/blog">
        <img
          className={styles.icon}
          src="src/assets/icons8-book-32.png"
          alt=""
        />
      </a>
      <a className={styles.iconlink} href="/">
        <img className={styles.icon} src="src/assets/icons8-home.svg" alt="" />
      </a>
      <a className={styles.iconlink} href="/notes">
        <img
          className={styles.icon}
          src="src/assets/icons8-making-notes-32.png"
          alt=""
        />
      </a>
      <a className={styles.iconlink} href="https://www.sterntaler.com">
        <img
          className={styles.icon}
          src="src/assets/icons8-buying-32.png"
          alt=""
        />
      </a>
    </div>
  );
}

export default Footer;
