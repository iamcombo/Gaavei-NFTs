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
import ABI from '@/constants/ABI.json';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
import { toast } from 'react-hot-toast';
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

  const handleBuy = async () => {
    try {
      const { Contract } = connectContract('0x0Bf7e70B88ABd4D3C557AD091383415B867E9777', ABI);
  
      if (!Contract) return;
      const trx = Contract.claim(
        address,
        query?.id,
        1,
        { value: ethers.utils.parseEther('0') }
      );
      toast.promise(trx, {
        loading: 'Loading',
        success: 'Transaction completed',
        error: 'Something went wrong!',
      });
      setModal(false);
    } catch (err: any) {
      console.log(err);
      setModal(false);
      // toast.error(err.error);
    }
  };

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
            src="https://www.sound.xyz/_next/image?url=https%3A%2F%2Fd2i9ybouka0ieh.cloudfront.net%2Fartist-uploads%2F4233e090-a728-489b-8183-158aa3906085%2FRELEASE_COVER_IMAGE%2F5901564-newImage.png&w=64&q=75"
            width={60}
            height={60}
            radius={8}
          />
          <div>
            <Text>X Li</Text>
            <Text>Think I am in love with you</Text>
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
      />
    </>
  );
};

export default Buy;
