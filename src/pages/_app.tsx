import '@/styles/globals.css';
import { AppWrapper } from '@/components';
import type { AppProps } from 'next/app';
import { PageTransition } from '@/components/PageRoute';
import { useRouter } from 'next/router';

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
