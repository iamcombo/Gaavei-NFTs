import { Col, Grid, Group, Image, Text } from "@mantine/core";

function NewReleaseCard() {
  return (
    <Grid columns={24} gutter={2} align="center" justify="space-between">
      <Col span={14}>
        <Group>
          <Image alt='' src='https://royal-io.imgix.net/5e3c7687-0f82-4a9a-84f6-60d05dfdcc1a.jpg?auto=format&ar=1%3A1&fit=crop&dpr=1&w=120&h=120&q=75' width={60} height={60} radius='sm' />
          <div>
            <Text weight={500}>EXCITED</Text>
            <Text>PRETTYMUCH</Text>
            <Text color="dimmed">Gold</Text>
          </div>
        </Group>
      </Col>
      <Col span={8}>
        <Group position="right">
          <Text weight={600}>$ 62.05</Text>
        </Group>
      </Col>
    </Grid>
  );
}

export default NewReleaseCard;