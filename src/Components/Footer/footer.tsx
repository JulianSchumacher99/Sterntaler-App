import { Link } from 'react-router-dom';
import styles from './footer.module.css';

function Footer(): JSX.Element {
  return (
    <div className={styles.container}>
      <Link className={styles.iconlink} to="/musik">
        <img className={styles.icon} src="src/assets/icons8-music.svg" alt="" />
      </Link>
      <Link className={styles.iconlink} to="/blog">
        <img
          className={styles.icon}
          src="src/assets/icons8-book-32.png"
          alt=""
        />
      </Link>
      <Link className={styles.iconlink} to="/">
        <img className={styles.icon} src="src/assets/icons8-home.svg" alt="" />
      </Link>
      <Link className={styles.iconlink} to="/notes">
        <img
          className={styles.icon}
          src="src/assets/icons8-making-notes-32.png"
          alt=""
        />
      </Link>
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
