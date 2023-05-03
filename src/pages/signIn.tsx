import { useAuth } from "@/contexts/authContext";
import { Button, Container, Space, Stack, Title } from "@mantine/core";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useGoogleLogin } from '@react-oauth/google';
import { useRouter } from "next/router";

const Signin = () => {
  const { push } = useRouter();
  const { saveProfile } = useAuth();

  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${credentialResponse.access_token}`
        }
      })
      const data = await userInfo.json();
      saveProfile(data);

      push('/');
    },
  }); 

  return (
    <Container size={420} py={48}>
      <Title order={2} align="center">ROYAL.</Title>
      <Space h={32} />
      <Stack justify="center">
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== 'loading';
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === 'authenticated');

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  'style': {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <Button fullWidth color="dark" size="md" radius={8}  px={32} onClick={openConnectModal} type="button">
                        Connect Wallet
                      </Button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <Button fullWidth color="dark" size="md" radius={8}  px={32} onClick={openChainModal} type="button">
                        Wrong network
                      </Button>
                    );
                  }

                  return (
                    <Button fullWidth color="dark" size="md" radius={8} px={32} onClick={openAccountModal} type="button">
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ''}
                    </Button>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
        <Button fullWidth variant="outline" color="dark" size="md" radius={8} px={32} onClick={() => login()}>
          Login with google
        </Button>
      </Stack>
    </Container>
  );
}

export default Signin;