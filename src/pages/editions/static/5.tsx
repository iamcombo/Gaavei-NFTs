import { ScrollToTop } from "@/components";
import { ContractDetail, Description, HeroSection, Reward } from "@/components/Interfaces/Editions";
import { useWindowScroll } from "@mantine/hooks";
import { Button, Container, Divider, Group, Space, Text, Title } from "@mantine/core";

const Static5 = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <ScrollToTop {...{ scroll, scrollTo }} />

      <HeroSection
        image="https://i.ytimg.com/vi/0XAahtdEjMo/maxresdefault.jpg?v=6455e9cb"
        artist="G-Devith"
        artwork="https://troryorng.com/wp-content/uploads/2023/05/344864935_187820670862057_8842261264901749954_n-1024x1024.jpg"
        title="មហានគរ (यशोधरपुर Yaśōdharapura)"
      />

      <Container size={840} my={40}>
        <Group position="apart">
          <div>
            <Text fw={500}>Price</Text>
            <Title order={3}>FREE</Title>
          </div>
          <Button
            size="lg"
            radius={8}
            px={64}
            color="dark"
            variant="outline"
          >
            END
          </Button>
        </Group>

        <Divider my={24} />
        <Description description="Producer: G-DEVITH
Composer: Soun Piseth
Mix & Master: G-Devith
Artwork by: RockStarMade
Visual by: RockStarMeow
Chorus: @tepboprek 
" />

        <Space h={40} />
        <Reward />

        <Space h={40} />
        <ContractDetail
          blockchain="Binance Smart Chain"
          contractAddress=""
          releaseDate=""
          royalty="5%"
          tokenStandard="ERC-1155"
        />
      </Container>
    </>
  );
};

export default Static5;