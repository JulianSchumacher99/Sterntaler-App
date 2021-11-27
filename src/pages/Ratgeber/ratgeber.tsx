import Blog from '../../Components/Blog/blog';
import styles from './ratgeber.module.css';

function Ratgeber(): JSX.Element {
  return (
    <div className={styles.container}>
      <Blog />
    </div>
  );
}

export default Ratgeber;
