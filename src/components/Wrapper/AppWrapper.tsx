import { Raleway } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { CSSProperties, ReactNode } from "react";
import AuthProvider from "@/contexts/authContext";
import Rainbow from "./Rainbow";
import AppLayout from "../Layout/AppLayout";
import { RouterTransition } from "../PageRoute/RouterTransition";

const raleway: unknown = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--raleway-font',
});

function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <Rainbow>
      <MantineProvider  
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          colors: {
            'slate': ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a']
          },
          fontFamily: raleway as CSSProperties['fontFamily'],
        }}
      >
        <RouterTransition />
        <AuthProvider>
          <AppLayout>
            <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID || ''}>
              {children}
            </GoogleOAuthProvider>
          </AppLayout>
        </AuthProvider>
      </MantineProvider>
    </Rainbow>
  );
}

export default AppWrapper;