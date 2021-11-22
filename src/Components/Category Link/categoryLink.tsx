import styles from './categoryLink.module.css';

function CategoryLink(): JSX.Element {
  return (
    <div className={styles.container}>
      <a
        className={styles.category}
        href="https://www.sterntaler.com/pages/mode"
      >
        <p className={styles.text}>Mode</p>
        <img
          className={styles.arrow}
          src="https://cdn.shopify.com/s/files/1/0285/6920/6887/t/11/assets/navigation-arrow.svg?v=398319323178996361"
          alt=""
        />
      </a>
      <a
        className={styles.category}
        href="https://www.sterntaler.com/pages/spielwaren"
      >
        <p className={styles.text}>Spielwaren</p>
        <img
          className={styles.arrow}
          src="https://cdn.shopify.com/s/files/1/0285/6920/6887/t/11/assets/navigation-arrow.svg?v=398319323178996361"
          alt=""
        />
      </a>
      <a
        className={styles.category}
        href="https://www.sterntaler.com/pages/ausstattung"
      >
        <p className={styles.text}>Ausstattung</p>
        <img
          className={styles.arrow}
          src="https://cdn.shopify.com/s/files/1/0285/6920/6887/t/11/assets/navigation-arrow.svg?v=398319323178996361"
          alt=""
        />
      </a>
      <a
        className={styles.category}
        href="https://www.sterntaler.com/pages/sale"
      >
        <p className={styles.text}>Sale</p>
        <img
          className={styles.arrow}
          src="https://cdn.shopify.com/s/files/1/0285/6920/6887/t/11/assets/navigation-arrow.svg?v=398319323178996361"
          alt=""
        />
      </a>
    </div>
  );
}

export default CategoryLink;
