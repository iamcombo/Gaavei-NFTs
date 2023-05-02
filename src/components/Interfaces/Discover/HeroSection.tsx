import { useRef } from "react";
import Image from "next/image";
import { Badge, Button, Card, Col, Grid, Group, Overlay, Stack, Text, Title } from "@mantine/core";
import album from '@/assets/album.jpg'
import { Carousel } from "@mantine/carousel";
import Autoplay from 'embla-carousel-autoplay';

function HeroSection() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      withIndicators
      withControls={false}
      slideSize="100%"
      plugins={[autoplay.current]}
    >
      <Carousel.Slide>
        <Card h={240} radius={0} sx={{ position: 'relative' }}>
          <Image src={album} alt='' fill style={{ objectFit: 'cover' }} />
          <Overlay
            gradient="linear-gradient(-145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
            opacity={0.85}
            zIndex={0}
          />
          <div style={{ zIndex: 1, position: 'absolute', color: '#FFF', height: 'inherit' }}>
            <Grid columns={24} justify='end' align='center' sx={{ width: '100vw', height: 'inherit' }}>
              <Col span={12}>
                <Stack spacing='xl'>
                  <div>
                    <Badge color='slate.5'>Single</Badge>
                    <Text weight={600}>CULTURE CODE, ARAYA, RUNN</Text>
                    <Title weight={800}>THE ACT</Title>
                  </div>
                  <Group spacing={40}>
                    <Text weight={500} color='slate.2'>Trading is LIVE</Text>
                    <Button compact variant='outline' color='slate.1'>BUY NOW</Button>
                  </Group>
                </Stack>
              </Col> 
            </Grid>
          </div>
        </Card>
      </Carousel.Slide>
      <Carousel.Slide>
        <Card h={240} radius={0} sx={{ position: 'relative' }}>
          <Image src={album} alt='' fill style={{ objectFit: 'cover' }} />
          <Overlay
            gradient="linear-gradient(-145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
            opacity={0.85}
            zIndex={0}
          />
          <div style={{ zIndex: 1, position: 'absolute', color: '#FFF', height: 'inherit' }}>
            <Grid columns={24} justify='end' align='center' sx={{ width: '100vw', height: 'inherit' }}>
              <Col span={12}>
                <Stack spacing='xl'>
                  <div>
                    <Badge color='slate.5'>Single</Badge>
                    <Text weight={600}>CULTURE CODE, ARAYA, RUNN</Text>
                    <Title weight={800}>THE ACT</Title>
                  </div>
                  <Group spacing={40}>
                    <Text weight={500} color='slate.2'>Trading is LIVE</Text>
                    <Button compact variant='outline' color='slate.1'>BUY NOW</Button>
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