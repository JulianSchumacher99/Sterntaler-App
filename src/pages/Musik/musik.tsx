import MusicPlayer from '../../Components/Music Player/musicPlayer';
import styles from './musik.module.css';
import LaLeLu from '../../assets/La_Le_Lu.mp3';
import BrahmsWiegenlied from '../../assets/Brahms-Wiegenlied.mp3';
import GuterMond from '../../assets/Guter-Mond-du-gehst-so-stille.mp3';
import MozartsWiegenlied from '../../assets/Mozarts-Wiegenlied_Schlafe-mein-Prinzchen.mp3';
import Sandmann from '../../assets/Sandmann_-lieber-Sandmann.mp3';
import SchlafKindchen from '../../assets/Schlaf_-Kindchen-schlaf.mp3';

function Musik(): JSX.Element {
  const songs = [
    {
      title: 'La Le Lu',
      url: LaLeLu,
    },
    {
      title: 'Brahms Wiegenlied',
      url: BrahmsWiegenlied,
    },
    {
      title: 'Guter Mond du gehst so stille',
      url: GuterMond,
    },
    {
      title: 'Mozarts Wiegenlied',
      url: MozartsWiegenlied,
    },
    {
      title: 'Sandmann lieber Sandmann',
      url: Sandmann,
    },
    {
      title: 'Schlaf Kindchen Schlaf',
      url: SchlafKindchen,
    },
  ];
  return (
    <div className={styles.container}>
      {songs.map((song) => (
        // eslint-disable-next-line react/jsx-key
        <MusicPlayer title={song.title} url={song.url} />
      ))}
    </div>
  );
}
export default Musik;
