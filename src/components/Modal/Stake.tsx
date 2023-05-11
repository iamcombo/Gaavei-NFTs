import { useState } from "react";
import { Button, Modal, Text, TextInput, Title } from "@mantine/core";
import { useToggle } from "@/hooks/useToggle";
import { toast } from "react-hot-toast";
import { connectContract } from "@/utils";
import { ABI, ADDRESS } from "@/constants/CONTRACT";
import { useAccount } from "wagmi";
import type { IStake } from "./type";
import { ModalConfirmation } from ".";

const Stake = ({ modal, operation }: IStake) => {
  const { address } = useAccount();
  const modalConfirm = useToggle();
  const [amount, setAmount] = useState('');

  const openConfirmModal = () => {
    modal.toggleOff();
    modalConfirm.toggleOn();
  };

  const handleStake = async () => {
    try {
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
      const trx = Contract.stakeNFT(
        '0',
        amount
      );
      toast.promise(trx, {
        loading: 'Loading',
        success: 'Transaction completed',
        error: 'Something went wrong!',
      });
      modalConfirm.toggleOff();
    } catch (error) {
      modalConfirm.toggleOff();
      console.log(error);
    }
  };

  const handleUnstake = async () => {
    try {
      const { Contract } = connectContract(
        ADDRESS.STAKING,
        ABI.STAKING
      );
  
      if (!Contract) return;
      const trx = Contract.unstakeNFT('0', amount);
      toast.promise(trx, {
        loading: 'Loading',
        success: 'Transaction completed',
        error: 'Something went wrong!',
      });
      modalConfirm.toggleOff();
    } catch (error) {
      modalConfirm.toggleOff();
      console.log(error);
    }
  };

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
        callbackFn={operation === 'Stake' ? handleStake : handleUnstake}
        modal={modalConfirm.isOn}
        setModal={modalConfirm.toggle}
      />
    </>
  );
};

export default Stake;