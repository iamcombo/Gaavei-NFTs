import { Col, Grid, Title } from '@mantine/core';
import { TrendingCard } from '@/components/Card';

function Trending() {
  return (
    <div>
      <Title order={4} weight={600} mb={16}>Trending</Title>
      <Grid columns={24} gutter={32}>
        <Col xs={12}>
          <TrendingCard
            image='https://user-images.githubusercontent.com/38589050/237042431-c3a6ad9b-8057-436f-b15b-280ce2c7d460.jpg'
            title='THIS IS OUR TIME'
            description='
              នៅចាំដល់ណា ឱខេមរាអើយ វេលានេះហើយ ជាវេលាយើង សាមគ្គីសាងឈ្មោះ
              សាងយសថ្កុំថ្កើង រួមរស់រុងរឿង យើងខ្មែរតែមួយ បទ &#34នេះគឺវេលាយើង | THIS IS
              OUR TIME&#34 ផលិតដោយ ក្នុងយុទ្ធនាការ #BeyondTheGames
              ដើម្បីចូលរួមពោរពេញទៅដោយមោទកភាព នៃភាពជាម្ចាស់ផ្ទះនៃកីឡាស៊ីហ្គេម
              និងអាស៊ានប៉ារ៉ាហ្គេម ២០២៣ និងចែករំលែក 🫶🏼 ភាសាបេះដូងសម្រាប់កម្ពុជា 🫶🏼
              ជូនអត្តពលិកគ្រប់ៗរូប។.'
            tokenId='0'
            isEnd={false}
          />
        </Col>
        <Col xs={12}>
          <TrendingCard
            image='https://i.ytimg.com/vi/VLqaZeQvxzI/maxresdefault.jpg'
            title='Snoop Dogg x GaryVee - Please Take a Step Back'
            description=''
            tokenId='static/0'
            isEnd
          />
        </Col>
        <Col xs={12}>
          <TrendingCard 
            image='https://i.ytimg.com/vi/5ykFSOdqSC4/maxresdefault.jpg'
            title='OG BOBBY x BONG Feat. VannDa'
            description=''
            tokenId='static/1'
            isEnd
          />
        </Col>
        <Col xs={12}>
          <TrendingCard 
            image='https://i.ytimg.com/vi/IhI5MdPX5uU/maxresdefault.jpg'
            title='Pitbull x Omar Courtz - Me Pone Mal'
            description=''
            tokenId='static/2'
            isEnd
          />
        </Col>
      </Grid>
    </div>
  );
}

export default Trending;