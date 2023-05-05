import { IconArrowRight } from "@tabler/icons-react";
import { Button, Center, Col, Grid, Title } from "@mantine/core";
import { NewReleaseCard } from "@/components/Card";

function NewRelease() {
  return (
    <>
      <Title order={4} weight={600} mb={16}>New Release</Title>
      <Grid columns={24} gutter={32}>
        <Col sm={12}>
          <NewReleaseCard />
        </Col>
        <Col sm={12}>
          <NewReleaseCard />
        </Col>
        <Col sm={12}>
          <NewReleaseCard />
        </Col>
        <Col sm={12}>
          <NewReleaseCard />
        </Col>
      </Grid>
      <Center my={16}>
        <Button compact variant='subtle' rightIcon={<IconArrowRight size={16} />}>View all</Button>
      </Center>
    </>
  );
}

export default NewRelease;