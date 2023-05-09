import {
  Badge,
  Button,
  Card,
  Col,
  Grid,
  Group,
  Image,
  Text,
} from '@mantine/core';
import Link from 'next/link';

function TrendingCard() {
  return (
    <Card p={0} radius="md">
      <Card.Section>
        <Image
          src="https://user-images.githubusercontent.com/38589050/237042431-c3a6ad9b-8057-436f-b15b-280ce2c7d460.jpg"
          height={200}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>This is our time</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed" lineClamp={2}>
        នៅចាំដល់ណា ឱខេមរាអើយ វេលានេះហើយ ជាវេលាយើង សាមគ្គីសាងឈ្មោះ
        សាងយសថ្កុំថ្កើង រួមរស់រុងរឿង យើងខ្មែរតែមួយ បទ &#34នេះគឺវេលាយើង | THIS IS
        OUR TIME&#34 ផលិតដោយ ក្នុងយុទ្ធនាការ #BeyondTheGames
        ដើម្បីចូលរួមពោរពេញទៅដោយមោទកភាព នៃភាពជាម្ចាស់ផ្ទះនៃកីឡាស៊ីហ្គេម
        និងអាស៊ានប៉ារ៉ាហ្គេម ២០២៣ និងចែករំលែក 🫶🏼 ភាសាបេះដូងសម្រាប់កម្ពុជា 🫶🏼
        ជូនអត្តពលិកគ្រប់ៗរូប។.
      </Text>

      <Grid columns={24} align="center">
        <Col span={12}>
          <Text weight={600}>FREE</Text>
        </Col>
        <Col span={12}>
          <Link href="/editions/0">
            <Button
              fullWidth
              variant="outline"
              color="slate.8"
              radius="md"
              mt="md"
            >
              BUY
            </Button>
          </Link>
        </Col>
      </Grid>
    </Card>
  );
}

export default TrendingCard;
