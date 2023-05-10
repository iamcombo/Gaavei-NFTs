import {
  Avatar,
  Badge,
  Card,
  Col,
  Container,
  Grid,
  Group,
  Image,
  Overlay,
  Text,
  Title,
} from '@mantine/core';
import type { IHero } from './type';

const HeroSection = ({ image, artwork, title, artist }: IHero) => {
  return (
    <Card h={320} p={0} radius={0} sx={{ position: 'relative' }}>
      <Image
        alt="banner"
        src={image}
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
                <Avatar alt="" src={artwork} radius={16} size={80} />
                <div>
                  <Badge color="slate.5">Single</Badge>
                  <Text weight={600}>{artist}</Text>
                  <Title weight={800}>{title}</Title>
                </div>
              </Group>
            </Col>
          </Grid>
        </div>
      </Container>
    </Card>
  );
};

export default HeroSection;
