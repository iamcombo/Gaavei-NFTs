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
import { ABI, ADDRESS } from '@/constants/CONTRACT';
import { useAccount, useContractRead } from 'wagmi';
import { useAuth } from '@/contexts';
import Link from 'next/link';

function Editions() {
  const { user } = useAuth();
  const { address } = useAccount();
  const { query } = useRouter();
  const { data: claimRestrictions }: any = useContractRead({
    address: ADDRESS.COLLECTION as `0x${string}`,
    abi: ABI.COLLECTION,
    functionName: 'claimRestrictions',
    args: [0],
  });
  const { data: getSupplyClaimedByWallet }: any = useContractRead({
    address: ADDRESS.COLLECTION as `0x${string}`,
    abi: ABI.COLLECTION,
    functionName: 'getSupplyClaimedByWallet',
    args: [0, address],
  });

  const [scroll, scrollTo] = useWindowScroll();
  const [modalBuy, setModalBuy] = useState(false);
  const [metadata, setMetadata] = useState<any | null>(null);

  const getMetadata = async () => {
    try {
      const { Contract } = connectContract(
        ADDRESS.COLLECTION,
        ABI.COLLECTION
      );
  
      if (!Contract || !query?.id) return;
      const metadataUri = await Contract.uri(query.id);
  
      const res = await fetch(metadataUri);
      const data = await res.json();
      setMetadata(data);
    } catch (error) {
      // console.log(error);
    }
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
        <Group position="apart" align='start'>
          <div>
            <Text fw={500}>Price</Text>
            <Title order={3}>FREE</Title>
            <Text fw={500}>Max supply</Text>
            <Title order={3}>
              {claimRestrictions?.supplyClaimed.toString()}
              / {claimRestrictions?. maxSupply.toString()}
            </Title>
          </div>
          {(address && user) && (
            <div>
              <Button
                size="lg"
                radius={8}
                px={64}
                color="dark"
                variant="outline"
                onClick={() => setModalBuy(true)}
                mb={8}
              >
                BUY
              </Button>
              <Text fw={500}>Total claim</Text>
              <Title order={3}>
                {getSupplyClaimedByWallet?.toString()}
                / {claimRestrictions?. quantityLimit.toString()}
              </Title>
            </div>
          )}
          {(!address || !user) && (
            <Link href='/signIn'>
              <Button
                size="lg"
                radius={8}
                px={64}
                color="dark"
                mb={8}
              >
                SignIn
              </Button>
            </Link>
          )}
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