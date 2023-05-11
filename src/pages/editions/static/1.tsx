import { ScrollToTop } from "@/components";
import { ContractDetail, Description, HeroSection, Reward } from "@/components/Interfaces/Editions";
import { useWindowScroll } from "@mantine/hooks";
import { Button, Container, Divider, Group, Space, Text, Title } from "@mantine/core";

const Static1 = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <ScrollToTop {...{ scroll, scrollTo }} />

      <HeroSection
        image="https://i.ytimg.com/vi/5ykFSOdqSC4/maxresdefault.jpg"
        artist="OG Bobby x VannDa"
        artwork="https://i.ytimg.com/vi/5ykFSOdqSC4/maxresdefault.jpg"
        title="BONG"
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
            Coming soon..
          </Button>
        </Group>

        <Divider my={24} />
        <Description description="" />

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

export default Static1;