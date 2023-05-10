import { ScrollToTop } from "@/components";
import { ContractDetail, HeroSection, Reward } from "@/components/Interfaces/Editions";
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

        <Title order={3}>Description</Title>
        {/* <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide" mt={8}>
          <Text>
          Every time I say 'patience' in my content, that's saying to take a step back.”
          In related news, Snoop announced back in April that he is hitting ...
          </Text>
        </Spoiler> */}

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