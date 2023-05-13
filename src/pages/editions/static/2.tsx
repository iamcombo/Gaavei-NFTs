import { ScrollToTop } from "@/components";
import { ContractDetail, Description, HeroSection, Reward } from "@/components/Interfaces/Editions";
import { useWindowScroll } from "@mantine/hooks";
import { Button, Container, Divider, Group, Space, Text, Title } from "@mantine/core";

const Static2 = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <ScrollToTop {...{ scroll, scrollTo }} />

      <HeroSection
        image="https://i.ytimg.com/vi/IhI5MdPX5uU/maxresdefault.jpg"
        artist="Pitbull x Omar Courtz"
        artwork="https://i1.sndcdn.com/artworks-9Yx9xKxAQRkT-0-t500x500.jpg"
        title="Me Pone Mal"
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
        <Description description="When I walked up in the spot, and I seen her in the cut
When she walked by we locked eyes, and she said Papi what’s up?
I said Mami where you going, she said wherever you want
So I told her straight up 
Ese c*lo me pone mal, en el VIP
Ese c*lo me pone mal, en el VIP" />

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

export default Static2;