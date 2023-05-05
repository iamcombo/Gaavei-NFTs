import {
  Accordion,
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Overlay,
  Space,
  Spoiler,
  Text,
  Title,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { AudioPlayer, ScrollToTop } from '@/components';

function Editions() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <AudioPlayer />
      <ScrollToTop {...{ scroll, scrollTo }} />

      <Card h={320} p={0} radius={0} sx={{ position: 'relative' }}>
        <Image
          alt="banner"
          src="https://images.unsplash.com/photo-1502977036036-4ccfe354845f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          height={320}
          fit="cover"
          style={{ position: 'absolute' }}
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
            <Grid
              columns={24}
              p={0}
              align="end"
              sx={{ height: 'inherit' }}
            >
              <Col span={24}>
                <Group spacing="lg">
                  <Avatar
                    alt=""
                    src="https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2F4233e090-a728-489b-8183-158aa3906085%2FRELEASE_COVER_IMAGE%2F5901564-newImage.png&w=384&q=75"
                    radius={16}
                    size={80}
                  />
                  <div>
                    <Badge color="slate.5">Single</Badge>
                    <Text weight={600}>Xi Li</Text>
                    <Title weight={800}>Think I am in love with you</Title>
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
            <Title order={3}>0.008 ETH</Title>
          </div>
          <Button size="lg" radius={8} px={64} color="dark" variant="outline">
            BUY
          </Button>
        </Group>
        <Divider my={24} />
        <Title order={3}>Description</Title>
        <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide" mt={8}>
          <Text>
            {`
              "Think I'm In Love With You" is the first NFT drop from "california
              love stories," which tells the story of X Li's chance encounter with
              a girl at an after-party near Melrose Avenue, where they fell in
              love at first sight.
              
              "california love stories" is a collection of love stories set in different 
              parts of California that capture a range of emotions, including sadness, heartbreak, 
              joy, tragedy, anger, and longing. These emotions are brought to life through stunning 
              digital artworks that come in blue, purple, yellow, red, green, and orange, 
              symbolizing the various emotions explored in the music.

              The project is a live band performance featuring fully handcrafted instruments 
              that seamlessly blend popular, punk, classic rock, hip-hop, R&B, and electronic 
              music elements. The project is produced by a team of renowned music producers, 
              including platinum record producer James Chul Rim, known for his work on over 
              4 billion streams and TikTok chart-topping single "Wait a Minute!". The project 
              also features a talented lineup of musicians, including Simone Sello, known for 
              his work as the lead guitarist for Italian rock icon Vasco Rossi, and Edoardo 
              Tancredi, a seasoned musician who has performed on Jimmy Kimmel Live and collaborated 
              with artists like Avril Lavigne and Amelia Moore.
            `}
          </Text>
        </Spoiler>
        <Space h={40} />
        <Title order={3}>Rewards</Title>
        <Text c='dimmed' mb={16}>View all rewards and perks for collecting this release.</Text>
        <Grid columns={24}>
          <Col span={12}>
            <Card shadow='sm' radius={16} p={24} withBorder>
              <Image alt='' src='https://www.sound.xyz/_next/image?url=%2Fimages%2Fgolden_egg_icon.png&w=64&q=75' width={40} height={40} />
              <Text weight={600}>Golden Egg</Text>
              <Text>
                The egg is only revealed after the song sells out. 
                The winner receives a unique 1/1 NFT chosen by the artist.
              </Text>
            </Card>
          </Col>
          <Col span={12}>
            <Card shadow='sm' radius={16} p={24} withBorder>
              <Image alt='' src='https://www.sound.xyz/_next/image?url=%2Fimages%2Fgolden_egg_icon.png&w=64&q=75' width={40} height={40} />
              <Text weight={600}>Golden Egg</Text>
              <Text>
                The egg is only revealed after the song sells out. 
                The winner receives a unique 1/1 NFT chosen by the artist.
              </Text>
            </Card>
          </Col>
          <Col span={12}>
            <Card shadow='sm' radius={16} p={24} withBorder>
              <Image alt='' src='https://www.sound.xyz/_next/image?url=%2Fimages%2Fgolden_egg_icon.png&w=64&q=75' width={40} height={40} />
              <Text weight={600}>Golden Egg</Text>
              <Text>
                The egg is only revealed after the song sells out. 
                The winner receives a unique 1/1 NFT chosen by the artist.
              </Text>
            </Card>
          </Col>
          <Col span={12}>
            <Card shadow='sm' radius={16} p={24} withBorder>
              <Image alt='' src='https://www.sound.xyz/_next/image?url=%2Fimages%2Fgolden_egg_icon.png&w=64&q=75' width={40} height={40} />
              <Text weight={600}>Golden Egg</Text>
              <Text>
                The egg is only revealed after the song sells out. 
                The winner receives a unique 1/1 NFT chosen by the artist.
              </Text>
            </Card>
          </Col>
        </Grid>
        <Space h={40} />
        <Title order={3}>Contract Details</Title>
        <Text c='dimmed' mb={16}>View details of the contracts for this release.</Text>
        <Accordion variant="filled" radius="md" defaultValue="customization">
          <Accordion.Item value="customization">
            <Accordion.Control>RELEASE DATE</Accordion.Control>
            <Accordion.Panel>April 26, 2023</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="flexibility">
            <Accordion.Control>SONG CONTRACT ADDRESS</Accordion.Control>
            <Accordion.Panel>0x......</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="focus-ring">
            <Accordion.Control>BLOCKCHAIN</Accordion.Control>
            <Accordion.Panel>Ethereum</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="focus-rings">
            <Accordion.Control>TOKEN STANDARD</Accordion.Control>
            <Accordion.Panel>ERC-721</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="focus-ringa">
            <Accordion.Control>RESALE ROYALTY</Accordion.Control>
            <Accordion.Panel>10%</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default Editions;
