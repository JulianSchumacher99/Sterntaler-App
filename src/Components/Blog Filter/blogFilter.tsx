import styles from './blogFilter.module.css';

function BlogFilter(): JSX.Element {
  return (
    <div className={styles.container}>
      <img
        className={styles.icon}
        src="https://cdn.shopify.com/s/files/1/0285/6920/6887/t/11/assets/new-book.svg?v=183120823372343621"
        alt=""
      />
      <div className={styles.filtertext}>Filtern nach:</div>
      <select className={styles.dropdown}>
        <option>Alle</option>
        <option>Wissenwertes</option>
        <option>Funktionsartikel</option>
        <option>Spielzeug</option>
      </select>
    </div>
  );
}

export default BlogFilter;
