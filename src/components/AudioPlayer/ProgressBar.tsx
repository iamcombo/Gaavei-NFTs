import { Group, Text } from "@mantine/core";
import styles from './styles.module.css';

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }: any) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time: any) => {
    if (time && !(time.isNaN)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  return (
    <div className={styles.progress}>
      <input 
        type="range"
        defaultValue='0'
        ref={progressBarRef}
        onChange={handleProgressChange}
        // className={styles.progress}
      />
      <Group position="apart">
        <Text>{formatTime(timeProgress)}</Text>
        <Text>{formatTime(duration)}</Text>
      </Group>
    </div>
  );
};

export default ProgressBar;