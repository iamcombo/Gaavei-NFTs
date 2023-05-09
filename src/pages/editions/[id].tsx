import headerImage from '@/assets/this-is-our-time-cover.jpg';
import { AudioPlayer, ScrollToTop } from '@/components';
import { ModalBuy } from '@/components/Modal';
import ABI from '@/constants/ABI.json';
import { connectContract } from '@/utils';
import {
  Accordion,
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Divider,
  Grid,
  Group,
  Overlay,
  Space,
  Spoiler,
  Text,
  Title,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Editions() {
  const { query } = useRouter();

  const [scroll, scrollTo] = useWindowScroll();
  const [modalBuy, setModalBuy] = useState(false);
  const [metadata, setMetadata] = useState<any | null>(null);

  const getMetadata = async () => {
    const { Contract } = connectContract(
      '0x0Bf7e70B88ABd4D3C557AD091383415B867E9777',
      ABI
    );

    if (!Contract || !query?.id) return;
    const metadataUri = await Contract.uri(query.id);

    const res = await fetch(metadataUri);
    const data = await res.json();
    setMetadata(data);
  };

  useEffect(() => {
    getMetadata();
  }, [query]);

  return (
    <>
      <ModalBuy modal={modalBuy} setModal={setModalBuy} />
      <AudioPlayer />
      <ScrollToTop {...{ scroll, scrollTo }} />

      <Card h={320} p={0} radius={0} sx={{ position: 'relative' }}>
        <Image
          alt="banner"
          src={headerImage}
          height={320}
          style={{ position: 'absolute', width: '100%', objectFit: 'cover' }}
        />
        <Overlay
          gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
          opacity={0.85}
          zIndex={0}
        />
        <Container size={840} sx={{ height: 'inherit', position: 'relative' }}>
          <div
            style={{
              zIndex: 1,
              position: 'absolute',
              color: '#FFF',
              width: '100%',
              height: 'inherit',
            }}
          >
            <Grid columns={24} p={0} align="end" sx={{ height: 'inherit' }}>
              <Col span={24}>
                <Group spacing="lg">
                  <Avatar
                    alt=""
                    src="https://i.seadn.io/gcs/files/0b0c39b546546cd542f62c64d6325bef.jpg?auto=format&w=1000"
                    radius={16}
                    size={80}
                  />
                  <div>
                    <Badge color="slate.5">Single</Badge>
                    <Text weight={600}>MPJ, David</Text>
                    <Title weight={800}>{metadata?.name}</Title>
                  </div>
                </Group>
              </Col>
            </Grid>
          </div>
        </Container>
      </Card>

      <Container size={840} my={40}>
        <Group position="apart">
          <div>
            <Text fw={500}>Price</Text>
            <Title order={3}>FREE</Title>
          </div>
          <Button
            size="lg"
            radius={8}
            px={64}
            color="dark"
            variant="outline"
            onClick={() => setModalBuy(true)}
          >
            BUY
          </Button>
        </Group>
        <Divider my={24} />
        <Title order={3}>Description</Title>
        <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide" mt={8}>
          <Text>{metadata?.description}</Text>
        </Spoiler>
        <Space h={40} />
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
        <Space h={40} />
        <Title order={3}>Contract Details</Title>
        <Text c="dimmed" mb={16}>
          View details of the contracts for this release.
        </Text>
        <Accordion variant="filled" radius="md" defaultValue="customization">
          <Accordion.Item value="customization">
            <Accordion.Control>RELEASE DATE</Accordion.Control>
            <Accordion.Panel>April 26, 2023</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="flexibility">
            <Accordion.Control>SONG CONTRACT ADDRESS</Accordion.Control>
            <Accordion.Panel>
              0x0Bf7e70B88ABd4D3C557AD091383415B867E9777/{query?.id}
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="focus-ring">
            <Accordion.Control>BLOCKCHAIN</Accordion.Control>
            <Accordion.Panel>Binance Smart Chain</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="focus-rings">
            <Accordion.Control>TOKEN STANDARD</Accordion.Control>
            <Accordion.Panel>ERC-1155</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="focus-ringa">
            <Accordion.Control>RESALE ROYALTY</Accordion.Control>
            <Accordion.Panel>10%</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default Editions;
