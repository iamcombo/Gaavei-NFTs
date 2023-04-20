import { Col, Grid, Title } from '@mantine/core';
import { TrendingCard } from '@/components/Card';

function Trending() {
  return (
    <div>
      <Title order={4} weight={600} mb={16}>Trending</Title>
      <Grid columns={24} gutter={32}>
        <Col span={12}>
          <TrendingCard />
        </Col>
        <Col span={12}>
          <TrendingCard />
        </Col>
      </Grid>
    </div>
  );
}

export default Trending;