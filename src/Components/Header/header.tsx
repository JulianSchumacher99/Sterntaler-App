import styles from './header.module.css';

function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src="https://cdn.shopify.com/s/files/1/0285/6920/6887/files/Logo_Schneeflocken_2_340x.png?v=1638522609"
        alt="Sterntaler Logo"
      />
    </div>
  );
}

export default Header;
