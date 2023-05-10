import {
  Avatar,
  Box,
  Button,
  Center,
  Col,
  Grid,
  ScrollArea,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

const collectors = [
  'John', 'Jane', 'Janny', 'Lisa', 'Jungkook', 'Nattie'
];

function TopCollectors() {
  return (
    <div>
      <Title order={4} weight={600} mb={32}>
        Top Collectors
      </Title>
      <ScrollArea maw={840} h={150}>
        <Box w={840}>
          <Grid columns={24}>
            {collectors.map((I) => 
              <Col span={4} key={I}>
                <Stack justify="center" align="center" spacing="xs">
                  <Avatar
                    src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${I}`}
                    radius={999}
                    size="xl"
                  />
                  <div>
                    <Text weight={500}>{I}</Text>
                    <Text weight="lighter" size="xs">
                      @{I}
                    </Text>
                  </div>
                </Stack>
              </Col>
            )}
          </Grid>
        </Box>
      </ScrollArea>
      <Center my={16}>
        <Button
          compact
          variant="subtle"
          rightIcon={<IconArrowRight size={16} />}
        >
          View all
        </Button>
      </Center>
    </div>
  );
}

export default TopCollectors;
