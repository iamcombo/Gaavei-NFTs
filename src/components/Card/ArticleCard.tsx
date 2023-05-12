import { Anchor, AspectRatio, Card, Image, Text, Title } from '@mantine/core';

interface IArticle {
  title: string;
  image: string;
  link: string;
  description: string;
}

function ArticleCard({
  title,
  image,
  link,
  description
}: IArticle) {
  return (
    <Anchor href={link} target='_blank'>
      <Card withBorder radius={8} sx={{ height: '100%' }}>
        <Card.Section pb={8}>
          <AspectRatio ratio={1080 / 720}>
            <Image
              alt=""
              src={image}
              fit='cover'
            />
          </AspectRatio>
        </Card.Section>
        <Title order={4}>{title}</Title>
        <Text weight="lighter" mb={16}>
          Mar. 6, 2023
        </Text>
        <Text lineClamp={3}>{description}</Text>
      </Card>
    </Anchor>
  );
}

export default ArticleCard;
