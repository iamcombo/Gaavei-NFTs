import { AppShell, Divider } from '@mantine/core';
import type { ReactNode } from 'react';
import HeaderComponent from './Header';
import Footer from './Footer';

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell
      header={<HeaderComponent />}
      footer={
        <div>
          <Divider />
          <Footer />
        </div>
      }
      padding={0}
    >
      {children}
    </AppShell>
  );
}

export default AppLayout;