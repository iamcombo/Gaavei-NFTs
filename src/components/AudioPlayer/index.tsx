import { useEffect, useRef, useState } from "react";
import { Col, Dialog, Grid, Group } from "@mantine/core";
import Control from "./Control";
import ProgressBar from "./ProgressBar";
import DisplayTrack from "./DisplayTrack";
import { tracks } from "./data";

const AudioPlayer = () => {
  const audioRef = useRef();
  const progressBarRef = useRef();

  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpened(true);
    }, 500);
  },[]);

  return (
    <Dialog
      opened={opened}
      onClose={() => {}}
      radius={16}
      size={410}
      withCloseButton={false}
      shadow="md"
      withBorder
      transition="slide-up"
      transitionDuration={300} 
      transitionTimingFunction="ease"
    >
      <Grid columns={24} justify="space-between" align='center'>
        <Col span={18}>
          <DisplayTrack {...{ currentTrack, audioRef, setDuration, progressBarRef }} />
        </Col>
        <Col span={6}>
          <Group position="right">
            <Control {...{ audioRef, progressBarRef, duration, setTimeProgress }} />
          </Group>
        </Col>
        <Col span={24}>
          <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />  
        </Col>
      </Grid>
    </Dialog>
  );
};

export default AudioPlayer;