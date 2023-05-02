import { Col, Container, Divider, Grid, Group, Text } from "@mantine/core";

function Editions() {
  return (
    <div>
      <Container size={1280} my={40}>
        <Grid columns={24}>
          <Col span={12}>
            <Group>
              <div>
                <Text>Avg. sale</Text>
                <Text weight={600} size='xl'>$ 29.40</Text>
              </div>
              <Divider orientation="vertical" />
              <div>
                <Text>Lowest price</Text>
                <Text weight={600} size='xl'>$ 33.99</Text>
              </div>
            </Group>
          </Col>
          <Col span={12}>
          </Col>
        </Grid>
        <Divider />
        <Text>Market stats</Text>
        <Grid>
          <Col></Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Editions;