import { ActionIcon } from "@mantine/core";
import { useCallback, useEffect, useRef, useState } from "react";
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from "@tabler/icons-react";

const Control = ({ audioRef,  progressBarRef, duration, setTimeProgress }: any) => {
  const playAnimationRef: any = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const repeat = useCallback(() => {
    if (!audioRef?.current) return;
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(playAnimationRef.current);
    }
  }, [isPlaying, audioRef, repeat]);

  return (
    <ActionIcon
      color="dark" 
      size={60} 
      radius={999} 
      variant="filled" 
      onClick={() => setIsPlaying(!isPlaying)}
    >
      { isPlaying ?
        <IconPlayerPauseFilled />
        :
        <IconPlayerPlayFilled />
      }
    </ActionIcon>
  );
};

export default Control;