import { useState, useEffect } from 'react';
import styles from './loadingScreen.module.css';

function LoadingScreen(): JSX.Element {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (progress === 100) {
      return;
    }
    setTimeout(() => setProgress(progress + 5), 100);
  });

  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src="https://cdn.shopify.com/s/files/1/0285/6920/6887/files/Logo_Schneeflocken_2_340x.png?v=1638522609"
        alt="Sterntaler Logo"
      />
      <progress className={styles.progress} value={progress} max="100" />
    </div>
  );
}

export default LoadingScreen;
