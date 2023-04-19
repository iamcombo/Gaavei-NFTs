import type { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import AppLayout from "../Layout/AppLayout";

function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
        colors: {
          'slate': ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a']
        }
      }}
    >
      <AppLayout>
        {children}
      </AppLayout>
    </MantineProvider>
  );
}

export default AppWrapper;