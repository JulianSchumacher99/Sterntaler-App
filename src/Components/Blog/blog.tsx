import { useState } from 'react';
import BlogFilter from '../Blog Filter/blogFilter';
import styles from './blog.module.css';

function Blog(): JSX.Element {
  const [filter, setFilter] = useState<string>('');

  const buttonText = 'Mehr lesen';

  return (
    <>
      <BlogFilter onSetFilter={setFilter} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contenttext}>
            <h2 className={styles.h2}>NEW ARRIVALS</h2>
            <p>Entdecke jetzt die Gatenfreunde Emmily und Emmilius</p>
            <button className={styles.btn}>{buttonText}</button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contenttext}>
            <h2 className={styles.h2}>Herbst-/ Winterkolletkion</h2>
            <p>Alle Insights zur neuen Kollektion findest du hier..</p>
            <button className={styles.btn}>{buttonText}</button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contenttext}>
            <h2 className={styles.h2}>Sterntaler Hebamme</h2>
            <p>Tipps und Tricks rund um den Baby Schlaf</p>
            <button className={styles.btn}>{buttonText}</button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contenttext}>
            <h2 className={styles.h2}>Nachhaltigkeit</h2>
            <p>Wir sind fair, der Umwelt zuliebe!</p>
            <button className={styles.btn}>{buttonText}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
