import { 
  Button, 
  Card, 
  Container,
  Divider, 
  Group, 
  Space, 
  Text, 
  Title 
} from "@mantine/core";
import { ethers } from "ethers";
import { useAccount, useContractRead, useToken } from "wagmi";
import { ModalStake } from "@/components/Modal";
import { ABI, ADDRESS } from "@/constants/CONTRACT";
import { useToggle } from "@/hooks/useToggle";
import { useAuth } from "@/contexts";

const Earning = () => {
  const { user } = useAuth();
  const { address } = useAccount();
  const modal = useToggle();
  const modalUnstake = useToggle();

  const { data: Token } = useToken({
    address: ADDRESS.REWARDTOKEN as `0x${string}`,
  });

  const { data: totalToken } = useContractRead({
    address: ADDRESS.COLLECTION as `0x${string}`,
    abi: ABI.COLLECTION,
    functionName: 'balanceOf',
    args: [address, 0],
  });

  const { data: totalAmountStaked } = useContractRead({
    address: ADDRESS.STAKING as `0x${string}`,
    abi: ABI.STAKING,
    functionName: 'tokenAmountStaked',
    args: [address],
  });

  const { data: rewardEarned } = useContractRead({
    address: ADDRESS.STAKING as `0x${string}`,
    abi: ABI.STAKING,
    functionName: 'calculateTokens',
    args: [0],
  });

  return (
    <Container size={520} py={48}>
      <Title order={3}>My Earning</Title>
      <Card withBorder radius={16} mt={24}>
        <Text fw={600}>{user?.name}</Text>
        <Group position="apart" mt={8}>
          <Text>Available balance</Text>
          <Text>{totalToken?.toString()}</Text>
        </Group>
        <Group position="apart" mt={4}>
          <Text>Stacked</Text>
          <Text>{totalAmountStaked?.toString()}</Text>
        </Group>
      </Card>
      <Button size="md" color="dark" radius={8} mt={16} fullWidth onClick={modal.toggleOn}>
        Stake my token
      </Button>
      <Space h={24} />
      <Group position="apart">
        <Text>Total Stacked</Text>
        <Text>{totalAmountStaked?.toString()}</Text>
      </Group>
      <Divider my={16} />
      <Group position="apart">
        <div>
          <Text>Reward earned</Text>
          <Text>{ethers.utils.formatEther(rewardEarned as string || '0')} {Token?.symbol}</Text>
        </div>
        <Button variant="light" radius={8} compact onClick={modalUnstake.toggleOn}>
          Unstake
        </Button>
      </Group>

      <ModalStake modal={modal} operation='Stake' />
      <ModalStake modal={modalUnstake} operation='Unstake' />
    </Container>
  );
};

export default Earning;