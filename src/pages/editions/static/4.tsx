import { ScrollToTop } from "@/components";
import { ContractDetail, Description, HeroSection, Reward } from "@/components/Interfaces/Editions";
import { useWindowScroll } from "@mantine/hooks";
import { Button, Container, Divider, Group, Space, Text, Title } from "@mantine/core";

const Static4 = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <ScrollToTop {...{ scroll, scrollTo }} />

      <HeroSection
        image="https://i.ytimg.com/vi/CsGeVlE6c_Q/maxresdefault.jpg"
        artist="Khemarak Sereymun"
        artwork="https://i.ytimg.com/vi/CsGeVlE6c_Q/maxresdefault.jpg"
        title="Welcome to Angkor"
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
        <Description description="Written: Songha Group 
Producer: Songha & Ran  
Co-Producer: Kyle & Kerwin 
Khmer Instrument: ឌៀប សិទិ្ធសុធា
Mixing & Mastering: ណុំ ចាន់រតនៈ
ដឹកនាំសម្តែង៖ Jonathan 
រៀបចំការផលិត៖ រាជ ម៉ានុត
AD & Line Producer: ឈន ពិសិដ្ឋ
ដឹកនាំថត៖ សុខ ដាន់
Focus Puller: ង៉ូវ បូរិទ្ធ
ជំនួយការថត៖ ប៊ុន ចាន់ណារ៉ា
កាត់ត៖ យន់ យ៉ូណាថាន
កែពណ៌៖ M-FREE
ប្រធានបច្ចេកទេសភ្លើង៖ ថា ឃា
ជំនួយការផ្នែកភ្លើង៖ យិន ណែម-ឃួន សុខលាង-សុវណ្ណ ឧត្ដម
ដេគ័រ៖ ថៃ សេង & វ៉ា ឃីម
Production & Location: សឹង សុជាតិ
Make up: Team KINO" />

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

export default Static4;