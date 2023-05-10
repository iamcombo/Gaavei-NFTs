import Head from 'next/head';
import { Container, Space } from '@mantine/core';
import {
  HeroSection,
  Learn,
  LocalRelease,
  NewRelease,
  TopCollectors,
  Trending,
} from '@/components/Interfaces/Discover';

export default function Home() {
  return (
    <>
      <Head>
        <title>GAAVEI.</title>
        <meta name="description" content="MUSIC NFTs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <Container size={820} py={48}>
          <Trending />
          <Space h={48} />
          <NewRelease />
          <LocalRelease />
          <Space h={48} />
          <TopCollectors />
          <Learn />
        </Container>
      </main>
    </>
  );
}