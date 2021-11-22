import styles from './socialMedia.module.css';

function SocialMedia(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Hey, i like you!</div>
      <div className={styles.socialmedia}>
        <img
          className={styles.img}
          src="https://cdn.shopify.com/s/files/1/0285/6920/6887/files/strumpfhose_375x.jpg?v=1634277375"
          alt="Junge in Sterntaler Strumphose"
        />
        <a href="https://www.instagram.com/sterntalergmbh/">
          <img
            className={styles.img}
            src="https://cdn.shopify.com/s/files/1/0285/6920/6887/files/Insta_375x.png?v=1615292493"
            alt="Sterntaler Instagram"
          />
        </a>
        <img
          className={styles.img}
          src="https://cdn.shopify.com/s/files/1/0285/6920/6887/files/HW21_c9e9ecc5-7bf6-417c-83bc-44daf3a35dfe_375x.jpg?v=1629436981"
          alt="Sterntaler Wintermützen"
        />
        <a href="https://www.facebook.com/sterntalergmbh/">
          <img
            className={styles.img}
            src="https://cdn.shopify.com/s/files/1/0285/6920/6887/files/Facebook_375x.png?v=1615292535"
            alt="Sterntaler Facebook"
          />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
