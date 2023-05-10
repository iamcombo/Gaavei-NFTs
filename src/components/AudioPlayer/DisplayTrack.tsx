import { useEffect } from "react";
import { Avatar, Flex, Text, Title } from "@mantine/core";

/* eslint-disable jsx-a11y/media-has-caption */
const DisplayTrack = ({
  // currentTrack,
  setDuration,
  audioRef,
  progressBarRef,
}: any) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  useEffect(() => {
    onLoadedMetadata();
  },[]);

  return (
    <>
      <audio
        // src={currentTrack.src} 
        src="https://gnfd-testnet-sp-1.bnbchain.org/download/gaavei-songs/This-Is-Our-Time.MP3"
        ref={audioRef} 
        onLoadedMetadata={onLoadedMetadata}
      />
      <div>
        <Flex gap='md' align='center'>
          <Avatar
            alt=""
            src="https://i.seadn.io/gcs/files/0b0c39b546546cd542f62c64d6325bef.jpg?auto=format&w=1000"
            radius={16}
            size={80}
          />
          <div>
            <Text c='dimmed' size={14} weight={600}>MPJ, David</Text>
            <Title w={210} fz={14} truncate order={3}>This is our time</Title>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default DisplayTrack;