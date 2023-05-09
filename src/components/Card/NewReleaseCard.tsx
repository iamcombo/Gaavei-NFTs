import { Col, Grid, Group, Image, Text } from "@mantine/core";
import Link from "next/link";

function NewReleaseCard() {
  return (
    <Link href='/editions/0'>
      <Grid columns={24} gutter={2} align="center" justify="space-between">
        <Col span={14}>
          <Group>
            <Image alt='' src='https://i.seadn.io/gcs/files/0b0c39b546546cd542f62c64d6325bef.jpg?auto=format&w=1000' width={60} height={60} radius='sm' />
            <div>
              <Text weight={600}>This is our time</Text>
              <Text>MPJ, DAVID</Text>
              <Text color="dimmed">Gold</Text>
            </div>
          </Group>
        </Col>
        <Col span={8}>
          <Group position="right">
            <Text weight={600}>FREE</Text>
          </Group>
        </Col>
      </Grid>
    </Link>
  );
}

export default NewReleaseCard;