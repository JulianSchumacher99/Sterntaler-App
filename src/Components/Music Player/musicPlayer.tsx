import { useMemo, useState } from 'react';
import styles from './musicPlayer.module.css';

type MusicProps = {
  title: string;
  url: string;
};

function MusicPlayer({ title, url }: MusicProps): JSX.Element {
  const [content, setContent] = useState('▶️');
  const audio = useMemo(() => new Audio(url), []);

  function handleClick() {
    if (audio.paused) {
      audio.play();
      setContent('⏹');
    } else {
      audio.pause();
      setContent('▶️');
    }
  }

  return (
    <div className={styles.container}>
      <>
        <h2 className={styles.title}>{title}</h2>
        <button className={styles.playsound} onClick={handleClick}>
          {content}
        </button>
        <audio src={url} />
      </>
    </div>
  );
}

export default MusicPlayer;
