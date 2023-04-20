import { Card, Image, Text, Title } from '@mantine/core';
import React from 'react';

function ArticleCard() {
  return (
    <Card withBorder>
      <Card.Section pb={8}>
        <Image alt="" src='https://images.us-east-1.aws.slicknode.com/c7bc4ed68f238e33e578e8bd0d0080ffc27458af/554x554/palace-ui-royal-io/de6698f0-a80b-4320-ad00-cabdfbe491b7/ce941bda-8aa8-4caf-b66e-a56898682124.png' />
      </Card.Section>
      <Title order={4}>Music as an asset class</Title>
      <Text weight='lighter' mb={16}>Mar. 6, 2023</Text>
      <Text lineClamp={3}>Streaming has revolutionized the way we consume music and revived the music industry in recent years after nearly two decades of a downturn.</Text>
    </Card>
  );
}

export default ArticleCard;