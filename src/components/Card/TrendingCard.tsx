import { Badge, Button, Card, Col, Flex, Grid, Group, Image, SimpleGrid, Text } from "@mantine/core";

function TrendingCard() {
  return (
    <Card p={0} radius="md">
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={200}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed" lineClamp={2}>
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Grid columns={24} align="center">
        <Col span={12}>
          <Text weight={600}>$63.04</Text>
        </Col>
        <Col span={12}>
          <Button
            fullWidth 
            variant="outline" 
            color="slate.8" 
            radius="md"
            mt="md" 
          >
            BUY
          </Button>
        </Col>
      </Grid>
    </Card>
  );
}

export default TrendingCard;