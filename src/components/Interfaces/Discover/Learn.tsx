import { 
  Grid, 
  Tabs, 
  Title, 
  Col, 
  Space, 
  Center, 
  Button 
} from "@mantine/core";
import { StyledTabs } from "@/components";
import { ArticleCard } from "@/components/Card";
import { IconArrowRight } from "@tabler/icons-react";

function Learn() {
  return (
    <div>
      <Title order={4} weight={600} mb={16}>Learn</Title>
      <StyledTabs defaultValue="news">
        <Tabs.List>
          <Tabs.Tab value="news">
            NEWS
          </Tabs.Tab>
        </Tabs.List>

        <Space h={24} />

        <Tabs.Panel value="news">
          <Grid columns={24}>
            <Col xs={12} md={8}>
              <ArticleCard 
                title="What Are Music NFTs?"
                description="
                  NFTs aren't just cat GIFs and JPEGs of cartoon apes, 
                  they can also represent immutable ownership of music clips too.
                "
                image="https://www.coindesk.com/resizer/0PbxDbyuUc5gMemMrWroDA-ukkU=/2112x1584/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/D53PU2RQ4RFMFPW76K6JOHG36Q.jpg"
                link="https://www.coindesk.com/learn/what-are-music-nfts/"
              />
            </Col>
            <Col xs={12} md={8}>
              <ArticleCard 
                title="How Music NFTs Can Reshape the Music Industry"
                description="
                  A music NFT is a distinct digital asset that is issued on a blockchain 
                  and is linked to an individual song, EP, album, or video clip.
                "
                image="https://blog.chain.link/wp-content/uploads/2023/03/Music-NFT_V2-2048x1152.png"
                link="https://blog.chain.link/music-nfts/"
              />
            </Col>
            <Col xs={12} md={8}>
              <ArticleCard 
                title='
                  Snoop Dogg Gets Innovative With GaryVee For NFT Song "Please Take A Step Back"
                '
                description="
                  According to a press release, the song and its accompanying 
                  video will be a feature of the Web3 project that they are working on. 
                  The one-of-a-kind effort will be available to those people registered for 
                  last year VeeCon.
                "
                image="https://i.ytimg.com/vi/VLqaZeQvxzI/maxresdefault.jpg"
                link="https://www.msn.com/en-us/music/news/snoop-dogg-drops-please-take-a-step-back-nft-with-garyvee-for-2022-veecon-ticket-holders/ar-AA1au5f5"
              />
            </Col>
          </Grid>
          <Center my={16}>
            <Button compact variant='subtle' rightIcon={<IconArrowRight size={16} />}>
              View all
            </Button>
          </Center>
        </Tabs.Panel>
      </StyledTabs>
    </div>
  );
}

export default Learn;