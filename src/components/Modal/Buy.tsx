import {
  ActionIcon,
  Button,
  Group,
  Image,
  Modal,
  NumberInput,
  Space,
  Text,
  rem,
} from '@mantine/core';
import { useRef, useState } from 'react';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { connectContract } from '@/utils';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
import { ADDRESS, ABI } from '@/constants/CONTRACT';
import useAsync from '@/hooks/useAsync';
import { notifications } from '@mantine/notifications';
import type { IModal } from './type';
import Confirmation from './Confirmation';

const Buy = ({ modal, setModal }: IModal) => {
  const handlers = useRef<any>();
  const { address } = useAccount();
  const { query } = useRouter();

  const [modalConfirm, setModalConfirm] = useState(false);
  const [value, setValue] = useState<number | ''>(0);

  const openConfirm = () => {
    setModal(false);
    setModalConfirm(true);
  };

  const buy = () => {
    const { Contract } = connectContract(
      ADDRESS.COLLECTION,
      ABI.COLLECTION
    );

    if (!Contract) return;
    return Contract.claim(address, query?.id, 1, { 
      value: ethers.utils.parseEther('0'),
    });
  };

  const { execute: handleBuy, status } = useAsync(
    buy,
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
      setModalConfirm(false);
      notifications.update({
        id: 'load-data',
        title: 'Transaction completed',
        message: 'Successfully purchase',
        radius: 'md'
      });
    },
    (err) => {
      setModalConfirm(false);
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
        opened={modal}
        onClose={() => setModal(false)}
        radius={16}
        withCloseButton={false}
        padding={24}
        transitionProps={{ transition: 'slide-up', duration: 400 }}
        centered
      >
        <Group>
          <Image
            alt=""
            src="https://i.seadn.io/gcs/files/0b0c39b546546cd542f62c64d6325bef.jpg?auto=format&w=1000"
            width={60}
            height={60}
            radius={8}
          />
          <div>
            <Text>MPJ, DAVID</Text>
            <Text>THIS IS OUR TIME</Text>
          </div>
        </Group>
        <Space h={24} />
        <Group position="apart">
          <Text fw={500}>Quantity</Text>
          <Group spacing={5}>
            <ActionIcon
              variant="default"
              onClick={() => handlers.current.decrement()}
            >
              <IconMinus size={14} stroke={1.5} />
            </ActionIcon>

            <NumberInput
              hideControls
              value={1}
              onChange={(val) => setValue(val)}
              handlersRef={handlers}
              // max={10}
              min={0}
              step={2}
              styles={{ input: { width: rem(54), textAlign: 'center' } }}
              variant="unstyled"
              disabled
            />

            <ActionIcon
              size={24}
              variant="default"
              onClick={() => handlers.current.increment()}
            >
              <IconPlus size={14} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
        <Space h={16} />
        <Group position="apart">
          <Text fw={500}>Total Price</Text>
          <Text fw={600}>0.0</Text>
        </Group>
        <Space h={32} />
        <Button fullWidth size="md" color="dark" radius={8} onClick={openConfirm}>
          Buy
        </Button>
      </Modal>

      <Confirmation
        modal={modalConfirm}
        setModal={setModalConfirm}
        callbackFn={handleBuy}
        status={status}
      />
    </>
  );
};

export default Buy;
