import {
  Button,
  Container,
  Divider,
  Group,
  Space,
  Text,
  Title,
} from '@mantine/core';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useWindowScroll } from '@mantine/hooks';
import {
  ContractDetail,
  Description,
  HeroSection,
  Reward,
} from '@/components/Interfaces/Editions';
import { ModalBuy } from '@/components/Modal';
import { AudioPlayer, ScrollToTop } from '@/components';
import { connectContract } from '@/utils';
import ABI from '@/constants/ABI.json';

function Editions() {
  const { query } = useRouter();

  const [scroll, scrollTo] = useWindowScroll();
  const [modalBuy, setModalBuy] = useState(false);
  const [metadata, setMetadata] = useState<any | null>(null);

  const getMetadata = async () => {
    const { Contract } = connectContract(
      '0x0Bf7e70B88ABd4D3C557AD091383415B867E9777',
      ABI
    );

    if (!Contract || !query?.id) return;
    const metadataUri = await Contract.uri(query.id);

    const res = await fetch(metadataUri);
    const data = await res.json();
    setMetadata(data);
  };

  useEffect(() => {
    getMetadata();
  }, [query]);

  return (
    <>
      <ModalBuy modal={modalBuy} setModal={setModalBuy} />
      <AudioPlayer />
      <ScrollToTop {...{ scroll, scrollTo }} />

      <HeroSection
        image="https://user-images.githubusercontent.com/38589050/237042431-c3a6ad9b-8057-436f-b15b-280ce2c7d460.jpg"
        artist="MPJ, DAVID"
        artwork="https://i.seadn.io/gcs/files/0b0c39b546546cd542f62c64d6325bef.jpg?auto=format&w=1000"
        title="THIS IS OUR TIME"
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
            onClick={() => setModalBuy(true)}
          >
            BUY
          </Button>
        </Group>

        <Divider my={24} />

        <Description description={metadata?.description} />
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
}

export default Editions;