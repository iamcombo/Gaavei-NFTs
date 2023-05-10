import {
  Card,
  Col,
  Grid,
  Spoiler,
  Text,
  Title,
} from '@mantine/core';
import Image from 'next/image';

const Reward = () => {
  return (
    <>
      <Title order={3}>Rewards</Title>
      <Text c="dimmed" mb={16}>
        View all rewards and perks for collecting this release.
      </Text>
      <Grid columns={24}>
        <Col sm={12}>
          <Card shadow="sm" radius={16} p={24} withBorder sx={{ height: '100%' }}>
            <Image
              alt=""
              src="https://www.sound.xyz/_next/image?url=%2Fimages%2Fgolden_egg_icon.png&w=64&q=75"
              width={40}
              height={40}
            />
            <Text weight={600}>Audio Download</Text>
            <Text>
              Collectors can download the uncompressed lossless audio file for
              this song.
            </Text>
          </Card>
        </Col>
        <Col sm={12}>
          <Card shadow="sm" radius={16} p={24} withBorder sx={{ height: '100%' }}>
            <Image
              alt=""
              src="https://www.sound.xyz/_next/image?url=%2Fimages%2Fgolden_egg_icon.png&w=64&q=75"
              width={40}
              height={40}
            />
            <Text weight={600}>Royalty</Text>
            <Text>
              The egg is only revealed after the song sells out. The winner
              receives a unique 1/1 NFT chosen by the artist.
            </Text>
          </Card>
        </Col>
        <Col sm={12}>
          <Card shadow="sm" radius={16} p={24} withBorder sx={{ height: '100%' }}>
            <Image
              alt=""
              src="https://www.sound.xyz/_next/image?url=%2Fimages%2Fgolden_egg_icon.png&w=64&q=75"
              width={40}
              height={40}
            />
            <Text weight={600}>Acoustic Cover</Text>
            <Spoiler maxHeight={80} showLabel="Show more" hideLabel="Hide">
              <Text>
                AL3C golden eggs holders can claim an acoustic cover of any song
                at any time (up to three requests). All golden egg covers will
                be minted on Zora and/or Glass Protocol and golden egg holders
                will be airdropped an edition.
              </Text>
            </Spoiler>
          </Card>
        </Col>
        <Col sm={12}>
          <Card shadow="sm" radius={16} p={24} withBorder sx={{ height: '100%' }}>
            <Image
              alt=""
              src="https://www.sound.xyz/_next/image?url=%2Fimages%2Fgolden_egg_icon.png&w=64&q=75"
              width={40}
              height={40}
            />
            <Text weight={600}>Dinner Meetup</Text>
            <Text>
              Winner has the choice to schedule a dinner with artist or a party.
            </Text>
          </Card>
        </Col>
      </Grid>
    </>
  );
};

export default Reward;