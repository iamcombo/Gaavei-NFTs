import { IconArrowRight } from "@tabler/icons-react";
import { Button, Center, Col, Grid, Title } from "@mantine/core";
import { NewReleaseCard } from "@/components/Card";

function NewRelease() {
  return (
    <>
      <Title order={4} weight={600} mb={16}>New Release</Title>
      <Grid columns={24} gutter={32}>
        <Col sm={12}>
          <NewReleaseCard
            title='This is our time'
            artist='MPJ, DAVID'
            image='https://i.seadn.io/gcs/files/0b0c39b546546cd542f62c64d6325bef.jpg?auto=format&w=1000'
            price='Airdrop'
          />
        </Col>
        <Col sm={12}>
          <NewReleaseCard 
            title='Please Take a Step Back'
            artist='Snoop Dogg x GaryVee'
            image='https://i1.sndcdn.com/artworks-z4mdz6T3f4TP-0-t500x500.jpg'
            price='END'
          />
        </Col>
        <Col sm={12}>
          <NewReleaseCard 
            title='Me Pone Mal'
            artist='Pitbull x Omar Courtz'
            image='https://i1.sndcdn.com/artworks-9Yx9xKxAQRkT-0-t500x500.jpg'
            price='END'
          />
        </Col>
        <Col sm={12}>
          <NewReleaseCard 
            title='BONG'
            artist='OG BOBBY x VannDa'
            image='https://liftedasia.com/assets/blog/bong-copy.webp'
            price='END'
          />
        </Col>
      </Grid>
      <Center my={16}>
        <Button compact variant='subtle' rightIcon={<IconArrowRight size={16} />}>View all</Button>
      </Center>
    </>
  );
}

export default NewRelease;