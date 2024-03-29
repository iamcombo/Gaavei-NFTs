import { useAuth } from '@/contexts/authContext';
import { shortenAddress } from '@/utils';
import {
  ActionIcon,
  Avatar,
  Button,
  Divider,
  Group,
  Menu,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  IconCaretDown,
  IconLogout,
  IconReceiptTax,
  IconUser,
  IconWallet,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useAccount } from 'wagmi';

function DropdownMenu() {
  const { address } = useAccount();
  const { user, logout } = useAuth();

  return (
    <Menu
      shadow="md"
      width={200}
      radius={16}
      transitionProps={{ transition: 'scale-y', duration: 300 }}
    >
      <Menu.Target>
        <ActionIcon color="dark">
          <IconCaretDown stroke={1.5} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Link href="/profile">
          <Menu.Item>
            <Group spacing={10}>
              <Avatar radius="xl" src={user?.picture} />
              <Stack spacing={4}>
                <Text weight={600} truncate>
                  {user?.name}
                </Text>
                <Text c="dimmed" truncate>
                  {shortenAddress(address) || ''}
                </Text>
              </Stack>
            </Group>
          </Menu.Item>
        </Link>
        <Divider my={8} />
        <Stack spacing={4} px={10}>
          {address && (
            <>
              <Title order={6}>0 ETH</Title>
              <Text c="dimmed" fz={14}>
                Wallet balance
              </Text>
            </>
          )}
          {!address && (
            <Link href="/signIn">
              <Button
                compact
                variant="subtle"
                fw={500}
                color="dark"
                leftIcon={<IconWallet size={14} />}
                radius={8}
              >
                Connect wallet
              </Button>
            </Link>
          )}
        </Stack>
        <Divider my={8} />
        <Link href="/profile">
          <Menu.Item icon={<IconUser stroke={1.5} size={14} />}>
            Profile
          </Menu.Item>
        </Link>
        <Link href="/earning">
          <Menu.Item icon={<IconReceiptTax stroke={1.5} size={14} />}>
            Earning
          </Menu.Item>
        </Link>
        {/* <Menu.Item icon={<IconSettings stroke={1.5} size={14} />}>Setting</Menu.Item> */}
        {/* <Menu.Item icon={<IconBuildingStore stroke={1.5} size={14} />}>Market</Menu.Item> */}
        <Menu.Item
          onClick={logout}
          icon={<IconLogout stroke={1.5} size={14} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default DropdownMenu;
