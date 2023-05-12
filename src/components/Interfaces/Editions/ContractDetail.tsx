import { Accordion, Anchor, Text, Title } from "@mantine/core";
import type { IContractDetail } from "./type";

const ContractDetail = ({
  releaseDate,
  contractAddress,
  blockchain,
  tokenStandard,
  royalty
}: IContractDetail) => {
  return (
    <>
      <Title order={3}>Contract Details</Title>
      <Text c="dimmed" mb={16}>
        View details of the contracts for this release.
      </Text>
      <Accordion variant="filled" radius="md" defaultValue="customization">
        <Accordion.Item value="customization">
          <Accordion.Control>RELEASE DATE</Accordion.Control>
          <Accordion.Panel>{releaseDate}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="flexibility">
          <Accordion.Control>SONG CONTRACT ADDRESS</Accordion.Control>
          <Accordion.Panel>
            <Anchor  href={`https://testnet.bscscan.com/address/${contractAddress}`} target="_blank">
              {contractAddress}
            </Anchor>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring">
          <Accordion.Control>BLOCKCHAIN</Accordion.Control>
          <Accordion.Panel>{blockchain}</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="focus-rings">
          <Accordion.Control>TOKEN STANDARD</Accordion.Control>
          <Accordion.Panel>{tokenStandard}</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="focus-ringa">
          <Accordion.Control>RESALE ROYALTY</Accordion.Control>
          <Accordion.Panel>{royalty}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default ContractDetail;