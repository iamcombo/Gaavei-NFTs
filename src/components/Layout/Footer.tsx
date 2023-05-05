import { Col, Container, Grid, SimpleGrid, Text, Title } from '@mantine/core';

function Footer() {
  return (
    <Container size={1280} py={40}>
      <Grid columns={24} gutter={32}>
        <Col md={6}>
          <Title order={4}>ROYAL.</Title>
        </Col>
        <Col md={6}>
          <SimpleGrid cols={1} spacing={8}>
            <Text color='dimmed'>Help center</Text>
            <Text color='dimmed'>Support</Text>
          </SimpleGrid>
        </Col>
        <Col md={6}>
          <SimpleGrid cols={1} spacing={8}>
            <Text color='dimmed'>Blog</Text>
            <Text color='dimmed'>Twitter</Text>
            <Text color='dimmed'>Facebook</Text>
            <Text color='dimmed'>Tiktok</Text>
            <Text color='dimmed'>Instagram</Text>
            <Text color='dimmed'>Discord</Text>
          </SimpleGrid>
        </Col>
        <Col md={6}>
          <SimpleGrid cols={1} spacing={8}>
            <Text color='dimmed'>Jobs</Text>
            <Text color='dimmed'>Privacy</Text>
            <Text color='dimmed'>Term of service</Text>
            <Text color='dimmed'>Associated Risks</Text>
          </SimpleGrid>
        </Col>
      </Grid>
    </Container>
  );
}

export default Footer;