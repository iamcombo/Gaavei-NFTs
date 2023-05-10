import { IconArrowRight } from "@tabler/icons-react";
import { Button, Center, Col, Grid, Title } from "@mantine/core";
import { NewReleaseCard } from "@/components/Card";

const LocalRelease = () => {
  return (
    <>
      <Title order={4} weight={600} mb={16}>Local Release</Title>
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
            title='Vanthan x VannDa - កម្លោះស្រុកខ្មែរ'
            artist="Vanthan, VannDa"
            image='https://d24jnm9llkb1ub.cloudfront.net/icpn/197338796542/197338796542-cover-zoom.jpg'
            price='0.0089 BNB'  
          />
        </Col>
        <Col sm={12}>
          <NewReleaseCard 
            title='Khemarak Sereymun - Welcome to Angkor'
            artist="Khemarak Sereymun"
            image='https://i.ytimg.com/vi/CsGeVlE6c_Q/maxresdefault.jpg'
            price='0.0098 BNB'
          />
        </Col>
        <Col sm={12}>
          <NewReleaseCard 
            title='G-Devith - មហានគរ (यशोधरपुर Yaśōdharapura)'
            artist="G-Devith"
            image='https://troryorng.com/wp-content/uploads/2023/05/344864935_187820670862057_8842261264901749954_n-1024x1024.jpg'
            price='0.0099 BNB'
          />
        </Col>
      </Grid>
      <Center my={16}>
        <Button compact variant='subtle' rightIcon={<IconArrowRight size={16} />}>View all</Button>
      </Center>
    </>
  );
};

export default LocalRelease;