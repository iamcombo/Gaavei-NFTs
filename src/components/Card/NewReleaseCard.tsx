import { Col, Flex, Grid, Group, Image, Text } from "@mantine/core";
import Link from "next/link";

interface INewReleaseCard {
  title: string;
  artist: string;
  image: string;
  price: string;
}

function NewReleaseCard({
  title,
  artist,
  image,
  price,
}: INewReleaseCard) {
  return (
    <Link href='/editions/0'>
      <Grid columns={24} gutter={2} align="center" justify="space-between">
        <Col span={18}>
          <Grid columns={24}>
            <Col span={6}>
              <Image alt='' src={image} width={60} height={60} radius='sm' />
            </Col>
            <Col span={18}>
              <Text weight={600} truncate>{title}</Text>
              <Text>{artist}</Text>
              <Text color="dimmed">Gold</Text>
            </Col>
          </Grid>
        </Col>
        <Col span={6}>
          <Group position="right">
            <Text weight={600}>{price}</Text>
          </Group>
        </Col>
      </Grid>
    </Link>
  );
}

export default NewReleaseCard;