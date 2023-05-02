import { IconArrowRight } from "@tabler/icons-react";
import { Avatar, Button, Center, Col, Grid, Stack, Text, Title } from "@mantine/core";

function TopCollectors() {
  return (
    <div>
      <Title order={4} weight={600} mb={32}>Top Collectors</Title>
      <Grid columns={24}>
        <Col md={4}>
          <Stack justify='center' align='center' spacing='xs'>
            <Avatar src='https://royal-io.imgix.net/3a153bb6-ecf2-4827-994d-0cfdb02343ab.png' radius='xl' size='xl' />
            <div>
              <Text weight={500}>Craig</Text>
              <Text weight='lighter' size='xs'>@C7D</Text>
            </div>
          </Stack>
        </Col>
        <Col md={4}>
          <Stack justify='center' align='center' spacing='xs'>
            <Avatar src='https://royal-io.imgix.net/3a153bb6-ecf2-4827-994d-0cfdb02343ab.png' radius='xl' size='xl' />
            <div>
              <Text weight={500}>Craig</Text>
              <Text weight='lighter' size='xs'>@C7D</Text>
            </div>
          </Stack>
        </Col>
        <Col md={4}>
          <Stack justify='center' align='center' spacing='xs'>
            <Avatar src='https://royal-io.imgix.net/3a153bb6-ecf2-4827-994d-0cfdb02343ab.png' radius='xl' size='xl' />
            <div>
              <Text weight={500}>Craig</Text>
              <Text weight='lighter' size='xs'>@C7D</Text>
            </div>
          </Stack>
        </Col>
        <Col md={4}>
          <Stack justify='center' align='center' spacing='xs'>
            <Avatar src='https://royal-io.imgix.net/3a153bb6-ecf2-4827-994d-0cfdb02343ab.png' radius='xl' size='xl' />
            <div>
              <Text weight={500}>Craig</Text>
              <Text weight='lighter' size='xs'>@C7D</Text>
            </div>
          </Stack>
        </Col>
        <Col md={4}>
          <Stack justify='center' align='center' spacing='xs'>
            <Avatar src='https://royal-io.imgix.net/3a153bb6-ecf2-4827-994d-0cfdb02343ab.png' radius='xl' size='xl' />
            <div>
              <Text weight={500}>Craig</Text>
              <Text weight='lighter' size='xs'>@C7D</Text>
            </div>
          </Stack>
        </Col>
        <Col md={4}>
          <Stack justify='center' align='center' spacing='xs'>
            <Avatar src='https://royal-io.imgix.net/3a153bb6-ecf2-4827-994d-0cfdb02343ab.png' radius='xl' size='xl' />
            <div>
              <Text weight={500}>Craig</Text>
              <Text weight='lighter' size='xs'>@C7D</Text>
            </div>
          </Stack>
        </Col>
      </Grid>
      <Center my={16}>
        <Button compact variant='subtle' rightIcon={<IconArrowRight size={16} />}>View all</Button>
      </Center>
    </div>
  );
}

export default TopCollectors;
