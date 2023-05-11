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
        <Link href={`/editions/${tokenId}`}>
          <Image
            src={image}
            height={200}
            alt="Norway"
          />
        </Link>
      </Card.Section>

      <Grid columns={24} justify='space-between' mt="md" mb="xs">
        <Col span={18}>
          <Text weight={500}>{title}</Text>
        </Col>
        <Col span={6}>
          <Group position='right'>
            {isEnd && (
              <Badge color="red" variant="light">
                Coming soon
              </Badge>
            )}
            {!isEnd && (
              <Badge color="green" variant="light">
                On Sale
              </Badge>
            )}    
          </Group>
        </Col>
      </Grid>

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
              {isEnd ? "Coming soon..." : "BUY"} 
            </Button>
          </Link>
        </Col>
      </Grid>
    </Card>
  );
}

export default TrendingCard;