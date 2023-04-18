import { AppShell } from '@mantine/core';
import type { ReactNode } from 'react';
import HeaderComponent from './Header';

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <AppShell
      header={<HeaderComponent />}
    >
      {children}
    </AppShell>
  );
}

export default AppLayout;