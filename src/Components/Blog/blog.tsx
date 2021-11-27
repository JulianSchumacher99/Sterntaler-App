import { useState } from 'react';
import BlogFilter from '../Blog Filter/blogFilter';
import styles from './blog.module.css';

function Blog(): JSX.Element {
  const [filter, setFilter] = useState<string>('Alle');

  let content;
  const buttonText = 'Mehr lesen';

  if (filter === 'Alle') {
    content = (
      <>
        <div
          className={styles.content}
          style={{
            backgroundImage:
              'url("https://cdn.shopify.com/s/files/1/0285/6920/6887/files/Banner_Spielwarenneuheiten_06d4cdef-1599-405d-9282-0d0a6f1bb238_x1024.jpg?v=1634626443")',
          }}
        >
          <div className={styles.contenttext}>
            <h2 className={styles.h2}>NEW ARRIVALS</h2>
            <p>Entdecke jetzt die Gatenfreunde Emmily und Emmilius</p>
            <button className={styles.btn}>{buttonText}</button>
          </div>
        </div>
        <div
          className={styles.content}
          style={{
            backgroundImage:
              'url("https://cdn.shopify.com/s/files/1/0285/6920/6887/files/Blog_HW_2021_x1024.jpg?v=1634626041")',
          }}
        >
          <div className={styles.contenttext}>
            <h2 className={styles.h2}>Herbst-/ Winterkolletkion</h2>
            <p>Alle Insights zur neuen Kollektion findest du hier..</p>
            <button className={styles.btn}>{buttonText}</button>
          </div>
        </div>
        <div
          className={styles.content}
          style={{
            backgroundImage:
              'url("https://cdn.shopify.com/s/files/1/0285/6920/6887/files/Banner_Hebammen_884bae15-e0d1-4e93-949a-e7f6ee640501_x1024.jpg?v=1633423325")',
          }}
        >
          <div className={styles.contenttext}>
            <h2 className={styles.h2}>Sterntaler Hebamme</h2>
            <p>Tipps und Tricks rund um den Baby Schlaf</p>
            <button className={styles.btn}>{buttonText}</button>
          </div>
        </div>
        <div
          className={styles.content}
          style={{
            backgroundImage:
              'url("https://cdn.shopify.com/s/files/1/0285/6920/6887/files/04_Textile_x1024.png?v=1597295242")',
          }}
        >
          <div className={styles.contenttext}>
            <h2 className={styles.h2}>Nachhaltigkeit</h2>
            <p>Wir sind fair, der Umwelt zuliebe!</p>
            <button className={styles.btn}>{buttonText}</button>
          </div>
        </div>
      </>
    );
  } else if (filter === 'Wissenwertes') {
    content = (
      <>
        <div
          className={styles.content}
          style={{
            backgroundImage:
              'url("https://cdn.shopify.com/s/files/1/0285/6920/6887/files/Banner_Hebammen_884bae15-e0d1-4e93-949a-e7f6ee640501_x1024.jpg?v=1633423325")',
          }}
        >
          <div className={styles.contenttext}>
            <h2 className={styles.h2}>Sterntaler Hebamme</h2>
            <p>Tipps und Tricks rund um den Baby Schlaf</p>
            <button className={styles.btn}>{buttonText}</button>
          </div>
        </div>{' '}
        <div
          className={styles.content}
          style={{
            backgroundImage:
              'url("https://cdn.shopify.com/s/files/1/0285/6920/6887/files/04_Textile_x1024.png?v=1597295242")',
          }}
        >
          <div className={styles.contenttext}>
            <h2 className={styles.h2}>Nachhaltigkeit</h2>
            <p>Wir sind fair, der Umwelt zuliebe!</p>
            <button className={styles.btn}>{buttonText}</button>
          </div>
        </div>
      </>
    );
  } else if (filter === 'Funktionsartikel') {
    content = <></>;
  } else {
    content = (
      <>
        <div
          className={styles.content}
          style={{
            backgroundImage:
              'url("https://cdn.shopify.com/s/files/1/0285/6920/6887/files/Banner_Spielwarenneuheiten_06d4cdef-1599-405d-9282-0d0a6f1bb238_x1024.jpg?v=1634626443")',
          }}
        >
          <div className={styles.contenttext}>
            <h2 className={styles.h2}>NEW ARRIVALS</h2>
            <p>Entdecke jetzt die Gatenfreunde Emmily und Emmilius</p>
            <button className={styles.btn}>{buttonText}</button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <BlogFilter onSetFilter={setFilter} />
      <div className={styles.container}>{content}</div>
    </>
  );
}

export default Blog;
