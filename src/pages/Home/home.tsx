import CategoryLink from '../../Components/Category Link/categoryLink';
import SocialMedia from '../../Components/Social Media /socialMedia';
import styles from './home.module.css';

function Home(): JSX.Element {
  return (
    <>
      <img
        className={styles.banner}
        src="https://cdn.shopify.com/s/files/1/0285/6920/6887/files/Emmily.jpg?v=1634276470"
        alt=""
      />
      <CategoryLink />
      <SocialMedia />
    </>
  );
}

export default Home;
