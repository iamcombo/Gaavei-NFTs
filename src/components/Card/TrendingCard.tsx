import {
  Badge,
  Button,
  Card,
  Col,
  Grid,
  Group,
  Image,
  Text,
} from '@mantine/core';
import Link from 'next/link';

interface ITrendingCard {
  image: string;
  title: string;
  description: string;
  tokenId: string;
  isEnd: boolean;
}

function TrendingCard({
  image,
  title,
  description,
  tokenId,
  isEnd
}: ITrendingCard) {
  return (
    <Card p={0} radius="md">
      <Card.Section>
        <Image
          src={image}
          height={200}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        {isEnd && (
          <Badge color="red" variant="light">
            End
          </Badge>
        )}
        {!isEnd && (
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        )}    
      </Group>

      <Text size="sm" color="dimmed" lineClamp={2}>
        {description}
      </Text>

      <Grid columns={24} align="center" mt={16}>
        { !isEnd && (
          <Col span={12}>
            <Text weight={600}>Airdrop</Text>
          </Col>
        )}
        <Col span={isEnd ? 24 : 12}>
          <Link href={`/editions/${tokenId}`}>
            <Button
              fullWidth
              variant={isEnd ? "filled" : "outline"} 
              color="slate.8"
              radius="md"
            >
              {isEnd ? "END" : "BUY"} 
            </Button>
          </Link>
        </Col>
      </Grid>
    </Card>
  );
}

export default TrendingCard;