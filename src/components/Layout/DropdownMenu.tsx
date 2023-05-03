import { useAccount } from "wagmi";
import { ActionIcon, Avatar, Divider, Group, Menu, Stack, Text, Title } from "@mantine/core";
import { IconCaretDown, IconLogout, IconReceiptTax, IconUser } from "@tabler/icons-react";
import { shortenAddress } from "@/utils";
import { useAuth } from "@/contexts/authContext";
import Link from "next/link";

function DropdownMenu() {
  const { address } = useAccount();
  const { user, logout } = useAuth();

  return (
    <Menu 
      shadow="md" 
      width={200} 
      radius={16}
      transitionProps={{ transition: 'scale-y', duration: 250 }}  
    >
      <Menu.Target>
        <ActionIcon color="dark">
          <IconCaretDown />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>
          <Group spacing={10}>
            <Avatar radius='xl' src={user?.picture} />
            <Stack spacing={4}>
              <Text weight={600} truncate>{user?.name}</Text>
              <Text c='dimmed' truncate>{shortenAddress(address) || ''}</Text>
            </Stack>
          </Group>
        </Menu.Item>
        <Divider my={8} />
        <Stack spacing={4} px={10}>
          <Title order={6}>0 ETH</Title>
          <Text c='dimmed' fz={14}>Wallet balance</Text>
        </Stack>
        <Divider my={8} />
        <Link href='/profile'>
          <Menu.Item icon={<IconUser stroke={1.5} size={14} />}>Profile</Menu.Item>
        </Link>
        <Menu.Item icon={<IconReceiptTax stroke={1.5} size={14} />}>Earning</Menu.Item>
        {/* <Menu.Item icon={<IconSettings stroke={1.5} size={14} />}>Setting</Menu.Item> */}
        {/* <Menu.Item icon={<IconBuildingStore stroke={1.5} size={14} />}>Market</Menu.Item> */}
        <Menu.Item onClick={logout} icon={<IconLogout stroke={1.5} size={14} />}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default DropdownMenu;