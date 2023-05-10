import { 
  Button, 
  Container, 
  Stack, 
  Title 
} from '@mantine/core';
import { useRouter } from 'next/router';
import { useGoogleLogin } from '@react-oauth/google';
import { CustomConnectButton } from '@/components';
import { useAuth } from '@/contexts';

const Signin = () => {
  const { push } = useRouter();
  const { saveProfile } = useAuth();

  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      const userInfo = await fetch(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
          headers: {
            Authorization: `Bearer ${credentialResponse.access_token}`,
          },
        }
      );
      const data = await userInfo.json();
      saveProfile(data);

      push('/');
    },
  });

  return (
    <Container size={420} py={48}>
      <Title order={2} align="center">
        GAAVEI.
      </Title>

      <Stack mt={32} justify="center">
        <CustomConnectButton />
        <Button
          fullWidth
          variant="outline"
          color="dark"
          size="md"
          radius={8}
          px={32}
          onClick={() => login()}
        >
          Login with google
        </Button>
      </Stack>
    </Container>
  );
};

export default Signin;