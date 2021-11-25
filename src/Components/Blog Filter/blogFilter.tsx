import styles from './blogFilter.module.css';

type FilterProps = {
  onSetFilter: (filter: string) => void;
};

function BlogFilter({ onSetFilter }: FilterProps): JSX.Element {
  return (
    <div className={styles.container}>
      <img
        className={styles.icon}
        src="https://cdn.shopify.com/s/files/1/0285/6920/6887/t/11/assets/new-book.svg?v=183120823372343621"
        alt=""
      />
      <p>Filtern nach:</p>
      <select
        onChange={(event) => onSetFilter(event.target.value)}
        className={styles.dropdown}
      >
        <option>Alle</option>
        <option>Wissenwertes</option>
        <option>Funktionsartikel</option>
        <option>Spielzeug</option>
      </select>
    </div>
  );
}

export default BlogFilter;
