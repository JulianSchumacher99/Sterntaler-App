import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import book from '../../assets/icons8-book-32.png';
import music from '../../assets/icons8-music.svg';
import home from '../../assets/icons8-home.svg';
import notes from '../../assets/icons8-making-notes-32.png';
import cart from '../../assets/icons8-buying-32.png';

function Footer(): JSX.Element {
  return (
    <div className={styles.container}>
      <Link className={styles.iconlink} to="/musik">
        <img className={styles.icon} src={music} alt="" />
      </Link>
      <Link className={styles.iconlink} to="/blog">
        <img className={styles.icon} src={book} alt="" />
      </Link>
      <Link className={styles.iconlink} to="/">
        <img className={styles.icon} src={home} alt="" />
      </Link>
      <Link className={styles.iconlink} to="/notizen">
        <img className={styles.icon} src={notes} alt="" />
      </Link>
      <a className={styles.iconlink} href="https://www.sterntaler.com">
        <img className={styles.icon} src={cart} alt="" />
      </a>
    </div>
  );
}

export default Footer;
