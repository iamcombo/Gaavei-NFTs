import { Avatar, Col, Container, Divider, Drawer, Grid, Group, Header, Text, Title } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import DropdownMenu from './DropdownMenu';
import { useState } from 'react';

function HeaderComponent() {
  const [opened, setOpened] = useState(false);

  return (
    <Header height={60}>
      <Container size={1280}>
        <Grid align='center' columns={24} h={70}>
          <Col span={12}>
            <Group>
              <Title order={3} mr={16}>ROYAL.</Title>
              <Text weight={500}>Discover</Text>
              <Text weight={500}>Portfolio</Text>
              <Divider orientation='vertical' />
              <IconSearch size={24} onClick={() => setOpened(true)} />
            </Group>
          </Col>
          <Col span={12}>
            <Group position='right'>
              <Text weight={500}>Post</Text>
              <Avatar
                src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80'
                alt='profile'
                radius='xl'
              />
              <DropdownMenu />
            </Group>
          </Col>
        </Grid>
      </Container>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position='bottom'
        size="90%"
        transitionProps={{ duration: 150, timingFunction: 'linear' }}
        withCloseButton={false}
      >
        {/* Drawer content */}
      </Drawer>
    </Header>
  );
}

export default HeaderComponent;