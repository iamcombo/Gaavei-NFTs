import { useAuth } from '@/contexts';
import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Col,
  Container,
  CopyButton,
  Divider,
  Grid,
  Group,
  Image,
  Overlay,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useAccount } from 'wagmi';
import { IconCopy } from '@tabler/icons-react';

const Profile = () => {
  const { address } = useAccount();
  const { user } = useAuth();

  return (
    <div>
      <Card h={240} p={0} radius={0} sx={{ position: 'relative' }}>
        <Image
          alt="banner"
          src="https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          height={280}
          fit="cover"
          style={{ position: 'absolute' }}
        />
        <Overlay
          gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
          opacity={0.85}
          zIndex={0}
        />
        <Container size={840}>
          <div
            style={{
              zIndex: 1,
              position: 'absolute',
              color: '#FFF',
              height: 'inherit',
            }}
          >
            <Grid
              columns={24}
              sx={{ width: '100vw', height: 'inherit' }}
              py={24}
            >
              <Col md={12}>
                <Stack spacing="lg">
                  <Avatar
                    alt={user?.name}
                    src={user?.picture}
                    radius={999}
                    size={80}
                  />
                  <div>
                    <Badge color="slate.5">Single</Badge>
                    <Group spacing={4}>
                      <Text weight={600}>{address}</Text>
                      <CopyButton value={address as string}>
                        {({ copied, copy }) => (
                          <ActionIcon color={copied ? 'teal' : 'blue'} onClick={copy}>
                            <IconCopy />
                          </ActionIcon>
                        )}
                      </CopyButton>
                    </Group>
                    <Title weight={800}>{user?.name}</Title>
                  </div>
                </Stack>
              </Col>
            </Grid>
          </div>
        </Container>
      </Card>

      <Container size={840}>
        <Card>
          <Group>
            <div>
              <Text weight={600}>Tokens</Text>
              <Text fw={600} c='dimmed'>0</Text>
            </div>
            <Divider orientation='vertical' />
            <div>
              <Text weight={600}>Artists</Text>
              <Text fw={600} c='dimmed'>0</Text>
            </div>
            <Divider orientation='vertical' />
          </Group>
        </Card>
      </Container>
    </div>
  );
};

export default Profile;
