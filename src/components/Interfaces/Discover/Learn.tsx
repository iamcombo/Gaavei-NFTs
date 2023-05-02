import { Grid, Tabs, Title, Col, Card, Image, Text, Space, Center, Button } from "@mantine/core";
import { StyledTabs } from "@/components";
import { IconArrowRight } from "@tabler/icons-react";
import { ArticleCard } from "@/components/Card";

function Learn() {
  return (
    <div>
      <Title order={4} weight={600} mb={16}>Learn</Title>
      <StyledTabs defaultValue="news">
        <Tabs.List>
          {/* <Tabs.Tab value="education">
            EDUCATION
          </Tabs.Tab> */}
          <Tabs.Tab value="news">
            NEWS
          </Tabs.Tab>
        </Tabs.List>

        <Space h={24} />

        <Tabs.Panel value="education">
          <Grid columns={24}>
            <Col span={8}>
              <ArticleCard />
            </Col>
            <Col span={8}>
              <ArticleCard />
            </Col>
            <Col span={8}>
              <ArticleCard />
            </Col>
          </Grid>
          <Center my={16}>
            <Button compact variant='subtle' rightIcon={<IconArrowRight size={16} />}>View all</Button>
          </Center>
        </Tabs.Panel>
        <Tabs.Panel value="news">
          <Grid columns={24}>
            <Col span={8}>
              <ArticleCard />
            </Col>
            <Col span={8}>
              <ArticleCard />
            </Col>
            <Col span={8}>
              <ArticleCard />
            </Col>
          </Grid>
          <Center my={16}>
            <Button compact variant='subtle' rightIcon={<IconArrowRight size={16} />}>View all</Button>
          </Center>
        </Tabs.Panel>
      </StyledTabs>
    </div>
  );
}

export default Learn;