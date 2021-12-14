import styles from './musicPlayer.module.css';

type MusicProps = {
  title: string;
  url: string;
};

function MusicPlayer({ title, url }: MusicProps): JSX.Element {
  const audio = new Audio(url);
  let content;

  function handleClick() {
    if (audio.paused) {
      audio.play();
      content = '⏹';
    } else {
      audio.pause();
      content = '▶️';
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
