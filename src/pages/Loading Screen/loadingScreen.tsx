import { useState, useEffect } from 'react';
import styles from './LoadingScreen.module.css';

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
        src="src/assets/Sterntaerl_logo.png"
        alt="Sterntaler Logo"
      />
      <progress className={styles.progress} value={progress} max="100" />
    </div>
  );
}

export default LoadingScreen;
