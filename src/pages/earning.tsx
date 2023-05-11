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
import { useEffect, useState } from "react";
import { useAccount, useContractRead, useToken } from "wagmi";
import { ModalStake } from "@/components/Modal";
import { ABI, ADDRESS } from "@/constants/CONTRACT";
import { useToggle } from "@/hooks/useToggle";
import { useAuth } from "@/contexts";
import { ethers } from "ethers";

const Earning = () => {
  const { user } = useAuth();
  const { address } = useAccount();
  const modalConfirm = useToggle();

  const { data: Token, isError, isLoading } = useToken({
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

  const [availableToken, setAvailableToken] = useState(0);

  useEffect(() => {
    const CalcAvailableToken = () => {
      if (!totalToken || !totalAmountStaked) return;
      setAvailableToken(Number(totalToken?.toString()) - Number(totalAmountStaked?.toString()));
    };
    CalcAvailableToken();
  }, [totalToken, totalAmountStaked]);

  return (
    <Container size={520} py={48}>
      <Title order={3}>My Earning</Title>
      <Card withBorder radius={16} mt={24}>
        <Text fw={600}>{user?.name}</Text>
        <Group position="apart" mt={8}>
          <Text>Available balance</Text>
          <Text>{availableToken}</Text>
        </Group>
        <Group position="apart" mt={4}>
          <Text>Stacked</Text>
          <Text>{totalAmountStaked?.toString()}</Text>
        </Group>
      </Card>
      <Button size="md" color="dark" radius={8} mt={16} fullWidth onClick={modalConfirm.toggleOn}>
        Stake my token
      </Button>
      <Space h={24} />
      <Group position="apart">
        <Text>Total Stacked</Text>
        <Text>{totalAmountStaked?.toString()}</Text>
      </Group>
      <Divider my={16} />
      <Group position="apart">
        <Text>Reward earned</Text>
        <Text>{ethers.utils.formatEther(rewardEarned as string) || 0} {Token?.symbol}</Text>
      </Group>

      <ModalStake modal={modalConfirm} />
    </Container>
  );
};

export default Earning;