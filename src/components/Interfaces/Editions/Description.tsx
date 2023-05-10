import Linkify from "linkify-react";
import { Anchor, Spoiler, Text, Title } from "@mantine/core";

const renderLink = ({ attributes, content }: any) => {
  const { href } = attributes;
  return <Anchor href={href} target="_blank">{content}</Anchor>;
};

const Description = ({ description }: { description: string }) => {
  return (
    <>
      <Title order={3}>Description</Title>
      <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide" mt={8}>
        <Linkify options={{ render: renderLink }}>
          <Text style={{whiteSpace: "pre-wrap"}}>{description}</Text>
        </Linkify>
      </Spoiler>
    </>
  );
};

export default Description;