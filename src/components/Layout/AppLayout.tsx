import {
  AppShell, Header, Navbar
} from '@mantine/core';
import type { ReactNode } from 'react';

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell
      navbar={<Navbar width={{ base: 300 }}>{/*  */}</Navbar>}
      header={<Header height={60}>{/* */}</Header>}
    >
      {children}
    </AppShell>
  );
}

export default AppLayout;