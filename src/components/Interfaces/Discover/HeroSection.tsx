import album from '@/assets/this-is-our-time-cover.jpg';
import snopp from '@/assets/snopp.jpg';
import { Carousel } from '@mantine/carousel';
import {
  Badge,
  Button,
  Card,
  Col,
  Grid,
  Group,
  Overlay,
  Stack,
  Text,
  Title,
  rem,
} from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';

function HeroSection() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      withIndicators
      withControls={false}
      slideSize="100%"
      plugins={[autoplay.current]}
      styles={{
        indicator: {
          width: rem(12),
          height: rem(4),
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: rem(40),
          },
        },
      }}
    >
      <Carousel.Slide>
        <Card h={240} radius={0} sx={{ position: 'relative' }}>
          <Image src={album} alt="" fill style={{ objectFit: 'cover' }} />
          <Overlay
            gradient="linear-gradient(-145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
            opacity={0.85}
            zIndex={0}
          />
          <div
            style={{
              zIndex: 1,
              position: 'absolute',
              color: '#FFF',
              height: 'inherit',
            }}
          >
            <Grid
              columns={24}
              justify="end"
              align="center"
              sx={{ width: '100vw', height: 'inherit' }}
            >
              <Col span={24} sm={12}>
                <Stack spacing="xl">
                  <div>
                    <Badge color="slate.5">Single</Badge>
                    <Text weight={600}>MPJ, DAVID</Text>
                    <Title weight={800}>THIS IS OUR TIME</Title>
                  </div>
                  <Group spacing={40}>
                    <Text weight={500} color="slate.2">
                      Trading is LIVE
                    </Text>
                    <Link href='/editions/0'>
                      <Button compact variant="outline" color="slate.1">
                        BUY NOW
                      </Button>
                    </Link>
                  </Group>
                </Stack>
              </Col>
            </Grid>
          </div>
        </Card>
      </Carousel.Slide>
      <Carousel.Slide>
        <Card h={240} radius={0} sx={{ position: 'relative' }}>
          <Image src={snopp} alt="" fill style={{ objectFit: 'cover' }} />
          <Overlay
            gradient="linear-gradient(-145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
            opacity={0.85}
            zIndex={0}
          />
          <div
            style={{
              zIndex: 1,
              position: 'absolute',
              color: '#FFF',
              height: 'inherit',
            }}
          >
            <Grid
              columns={24}
              justify="end"
              align="center"
              sx={{ width: '100vw', height: 'inherit' }}
            >
              <Col span={24} sm={12}>
                <Stack spacing="xl">
                  <div>
                    <Badge color="slate.5">Single</Badge>
                    <Text weight={600}>Snoop Dogg x GaryVee</Text>
                    <Title weight={800}>Please Take a Step Back</Title>
                  </div>
                  <Group spacing={40}>
                    {/* <Text weight={500} color="slate.2">
                      Trading is LIVE
                    </Text> */}
                    <Button compact variant="outline" color="slate.1">
                      Coming soon...
                    </Button>
                  </Group>
                </Stack>
              </Col>
            </Grid>
          </div>
        </Card>
      </Carousel.Slide>
    </Carousel>
  );
}

export default HeroSection;
