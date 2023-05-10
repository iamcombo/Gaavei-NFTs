import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { AppWrapper } from '@/components';
import { PageTransition } from '@/components/PageRoute';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <AppWrapper>
      <PageTransition keyProp={pathname}>
        <Component {...pageProps} />
      </PageTransition>
    </AppWrapper>
  );
}
