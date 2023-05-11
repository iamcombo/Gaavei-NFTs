import { 
  Button, 
  Modal, 
  Text, 
  TextInput, 
  Title, 
} from "@mantine/core";
import { useState } from "react";
import { useAccount } from "wagmi";
import useAsync from "@/hooks/useAsync";
import { useToggle } from "@/hooks/useToggle";
import { connectContract } from "@/utils";
import { ABI, ADDRESS } from "@/constants/CONTRACT";
import { notifications } from "@mantine/notifications";
import { ModalConfirmation } from ".";
import type { IStake } from "./type";

const Stake = ({ modal, operation }: IStake) => {
  const modalConfirm = useToggle();
  const { address } = useAccount();
  const [amount, setAmount] = useState('');

  const openConfirmModal = () => {
    modal.toggleOff();
    modalConfirm.toggleOn();
  };

  const handleStake = async () => {
    const { Contract: nftContract } = connectContract(
      ADDRESS.COLLECTION,
      ABI.COLLECTION
    );

    if (!nftContract) return;
    const approval = await nftContract.isApprovedForAll(address, ADDRESS.STAKING);
    if (!approval) {
      const approve = await nftContract.setApprovalForAll(ADDRESS.STAKING, true);
      await approve.wait();
    }

    const { Contract } = connectContract(
      ADDRESS.STAKING,
      ABI.STAKING
    );

    if (!Contract) return;
    return Contract.stakeNFT('0', amount);
  };

  const handleUnstake = () => {
    const { Contract } = connectContract(
      ADDRESS.STAKING,
      ABI.STAKING
    );

    if (!Contract) return;
    return Contract.unstakeNFT('0', amount);
  };

  const { execute, status } = useAsync(
    operation === 'Stake' ? handleStake : handleUnstake,
    async (trx) => {
      notifications.show({
        id: 'load-data',
        loading: true,
        title: 'Transaction in progress',
        message: 'Transaction will be completed in seconds.',
        autoClose: false,
        withCloseButton: false,
        radius: 'md',
      });
      await trx.wait();
      modalConfirm.toggleOff();
      notifications.update({
        id: 'load-data',
        title: 'Transaction completed',
        message: 'Successfully purchase',
        radius: 'md'
      });
    },
    (err) => {
      modalConfirm.toggleOff();
      notifications.show({
        title: 'Transaction failed',
        message: err?.reason,
        color: 'red',
        radius: 'md'
      });
    },
    false
  );

  return (
    <>
      <Modal
        opened={modal.isOn}
        onClose={modal.toggleOff}
        radius={16}
        withCloseButton={false}
        padding={24}
        transitionProps={{ transition: 'slide-up', duration: 400 }}
        centered
      >
        <Title order={3}>{operation === 'Stake' ? 'Stake' : 'Unstake'} Amount</Title>
        <Text mt={4} c='dimmed'>Enter amount you would like to stake.</Text>
        <TextInput
          label='Amount'
          placeholder="Enter staking amount"
          radius={8}
          size="md"
          mt={8}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button fullWidth size="md" color="dark" radius={8} mt={16} onClick={openConfirmModal}>
          {operation === 'Stake' ? 'Stake' : 'Unstake'}
        </Button>
      </Modal>  
    
      <ModalConfirmation
        callbackFn={execute}
        modal={modalConfirm.isOn}
        setModal={modalConfirm.toggle}
        status={status}
      />
    </>
  );
};

export default Stake;