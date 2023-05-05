import { useEffect } from "react";
import { Avatar, Flex, Group, SimpleGrid, Text, Title } from "@mantine/core";

/* eslint-disable jsx-a11y/media-has-caption */
const DisplayTrack = ({
  currentTrack,
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
        src={currentTrack.src} 
        ref={audioRef} 
        onLoadedMetadata={onLoadedMetadata}
      />
      <div>
        <Flex gap='md' align='center'>
          <Avatar
            alt=""
            src="https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2F4233e090-a728-489b-8183-158aa3906085%2FRELEASE_COVER_IMAGE%2F5901564-newImage.png&w=384&q=75"
            radius={16}
            size={80}
          />
          <div>
            <Text c='dimmed' size={14} weight={600}>Xi Li</Text>
            <Title w={210} fz={14} truncate order={3}>Think I am in love with you</Title>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default DisplayTrack;