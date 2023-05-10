import {
  Card,
  Col,
  Grid,
  Spoiler,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { IconCloudDownload, IconGuitarPick, IconReceiptTax, IconToolsKitchen2 } from '@tabler/icons-react';
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
            <ThemeIcon size={40} variant='light' radius={8} mb={8}>
              <IconCloudDownload />
            </ThemeIcon>
            <Text weight={600}>Audio Download</Text>
            <Text>
              Collectors can download the uncompressed lossless audio file for
              this song.
            </Text>
          </Card>
        </Col>
        <Col sm={12}>
          <Card shadow="sm" radius={16} p={24} withBorder sx={{ height: '100%' }}>
            <ThemeIcon size={40} variant='light' radius={8} mb={8}>
              <IconReceiptTax />
            </ThemeIcon>
            <Text weight={600}>Royalty</Text>
            <Text>
              By owning the assets, you will earn some rewards in many ways.
            </Text>
          </Card>
        </Col>
        <Col sm={12}>
          <Card shadow="sm" radius={16} p={24} withBorder sx={{ height: '100%' }}>
            <ThemeIcon size={40} variant='light' radius={8} mb={8}>
              <IconGuitarPick />
            </ThemeIcon>
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
            <ThemeIcon size={40} variant='light' radius={8} mb={8}>
              <IconToolsKitchen2 />
            </ThemeIcon>
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