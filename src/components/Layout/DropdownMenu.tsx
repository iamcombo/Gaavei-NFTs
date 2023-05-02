import { ActionIcon, Avatar, Divider, Group, Menu, Stack, Text, Title } from "@mantine/core";
import { IconArrowsLeftRight, IconCaretDown, IconMessageCircle, IconPhoto, IconSearch, IconSettings, IconTrash } from "@tabler/icons-react";

function DropdownMenu() {
  return (
    <Menu shadow="md" width={200} radius={16}>
      <Menu.Target>
        <ActionIcon color="dark">
          <IconCaretDown />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>
          <Group spacing={4}>
            <Avatar radius='xl' />
            <Stack spacing={4}>
              <Text weight={600}>usename</Text>
              <Text c='dimmed'>wallet address</Text>
            </Stack>
          </Group>
        </Menu.Item>
        <Divider my={8} />
        <Stack spacing={4} px={8}>
          <Title order={4}>0 ETH</Title>
          <Text c='dimmed'>Wallet balance</Text>
        </Stack>
        <Divider my={8} />
        <Menu.Item icon={<IconMessageCircle size={14} />}>Profile</Menu.Item>
        <Menu.Item icon={<IconPhoto size={14} />}>Earning</Menu.Item>
        <Menu.Item icon={<IconPhoto size={14} />}>Setting</Menu.Item>
        <Menu.Item icon={<IconPhoto size={14} />}>Market</Menu.Item>
        <Menu.Item icon={<IconPhoto size={14} />}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default DropdownMenu;