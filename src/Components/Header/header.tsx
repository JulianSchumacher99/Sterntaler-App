import styles from './header.module.css';

function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src="src/assets/Sterntaerl_logo.png"
        alt="Sterntaler Logo"
      />
    </div>
  );
}

export default Header;
