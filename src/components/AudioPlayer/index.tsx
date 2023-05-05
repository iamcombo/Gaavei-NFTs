import { useRef, useState } from "react";
import { Col, Container, Dialog, Drawer, Grid, Group, SimpleGrid } from "@mantine/core";
import Control from "./Control";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
import { tracks } from "./data";

const AudioPlayer = () => {
  const audioRef = useRef();
  const progressBarRef = useRef();

  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <Container>
      <Dialog
        opened
        onClose={() => {}}
        radius={16}
        size={410}
        withCloseButton={false}
        shadow="md"
        withBorder
        // overlayProps={{ opacity: 0 }}S
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
    </Container>
  );
};

export default AudioPlayer;