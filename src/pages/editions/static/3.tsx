import { ScrollToTop } from "@/components";
import { ContractDetail, Description, HeroSection, Reward } from "@/components/Interfaces/Editions";
import { useWindowScroll } from "@mantine/hooks";
import { Button, Container, Divider, Group, Space, Text, Title } from "@mantine/core";

const Static3 = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <ScrollToTop {...{ scroll, scrollTo }} />

      <HeroSection
        image="https://i.ytimg.com/vi/fJuJ6GW0UEk/maxresdefault.jpg"
        artist="Vanthan x VannDa"
        artwork="https://d24jnm9llkb1ub.cloudfront.net/icpn/197338796542/197338796542-cover-zoom.jpg"
        title="កម្លោះស្រុកខ្មែរ"
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
        <Description description="Producer: Vanthan & VannDa
Arrangement: Vanthan & VannDa
Written: Vanthan & VannDa
Mixed and Mastered: Vanthan
Artwork: Yuu 

Director: Youngz 
AD: Juvie Lin & Thida Hatake 
DOP: Chhai Tola, nick. & Aiden 
Camera Operator: Ted 
AC: Sopheak & Xing.VX
Editor: Chhai Tola  
Effect: Yuu 
Colorist: nick. 
Lighting: Pijeyfilm 

Production Manager: Raksa 
Assistant Production: Ya Rona & Teng Manith
Makeup artist: Thida Hatake

Extras: Varan | Lyma | Sophia | Raphy | Thida | Mardy | Vatanak | Sovanndary | Thatthai | Rithy | Rina | Ny ny | Elyka Vutha | Leang small

Thanks to Plerng Kob for the location" />

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

export default Static3;