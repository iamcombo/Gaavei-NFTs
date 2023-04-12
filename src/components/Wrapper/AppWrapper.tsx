import type { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import AppLayout from "../Layout/AppLayout";

function AppWrapper({children}: { children: ReactNode }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'dark',
      }}
    >
      <AppLayout>
        {children}
      </AppLayout>
    </MantineProvider>
  );
}

export default AppWrapper;