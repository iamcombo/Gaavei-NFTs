import { useAuth } from '@/contexts/authContext';
import {
  Avatar,
  Button,
  Col,
  Container,
  Divider,
  Drawer,
  Grid,
  Group,
  Header,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';

function HeaderComponent() {
  const [opened, setOpened] = useState(false);
  const { user } = useAuth();

  return (
    <Header height={60}>
      <Container size={1280}>
        <Grid align="center" columns={24} h={70}>
          <Col span={12}>
            <Group>
              <Link href="/">
                <Title order={3} mr={16}>
                  ROYAL.
                </Title>
              </Link>
              <Text weight={500}>Discover</Text>
              <Text weight={500}>Portfolio</Text>
              <Divider orientation="vertical" />
              <IconSearch size={24} onClick={() => setOpened(true)} />
            </Group>
          </Col>
          <Col span={12}>
            <Group position="right" spacing={4}>
              { user && (
                <>
                  {/* <Text weight={500}>Post</Text> */}
                  <Avatar src={user?.picture} alt="profile" radius="xl" />
                  <DropdownMenu />
                </>
              )}
              { !user && (
                <Link href='/signIn'>
                  <Button size='md' color='dark' px={24} radius={8}>
                    SignIn
                  </Button>
                </Link>
              )}
            </Group>
          </Col>
        </Grid>
      </Container>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="bottom"
        size="100%"
        transitionProps={{ duration: 150, timingFunction: 'linear' }}
        title={
          <Title align="center" order={3}>
            Search
          </Title>
        }
      >
        {/* Drawer content */}
        <Divider />
        <Container size={520} mt={40}>
          <TextInput
            variant="filled"
            placeholder="Search editions"
            icon={<IconSearch size={14} />}
          />
          <Divider my={24} />
        </Container>
      </Drawer>
    </Header>
  );
}

export default HeaderComponent;
