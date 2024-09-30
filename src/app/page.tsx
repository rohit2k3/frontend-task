'use client';

import { Flex, Box } from '@chakra-ui/react';
import ReplyBox from '@/components/ReplyBox';
import ChatMessages from '@/components/ChatMessages';
import TopNavBar from '@/components/TopNavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  interface ApiData {
    from: string;
    to: string;
    name: string;
    chats: { id: string; message: string; sender: { image: string; self: boolean; is_kyc_verified: boolean }; time: string }[]; // Add other properties as needed
  }

  const [apiData, setapiData] = useState<ApiData | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://qa.corider.in/assignment/chat?page=0")
      setapiData(data.data);
    };

    fetchData();
  }, [])


  return (
    <Flex display={'flex'} h="100vh" p={{ md: "1rem" }} justifyContent={'center'} justifyItems={'center'}>
      <Flex borderRadius={{ md: '0.7rem' }} boxShadow="lg" overflow="hidden" justifyContent={'center'} bg={'#faf9f4'} direction="column" maxW={{ base: "100%", lg: "25%", md: "40%" }}>
        {/* Top Navigation */}
        <TopNavBar fromName={apiData?.from || ''} toName={apiData?.to || ''} tripNo={apiData?.name || ''} avatar={''} />

        {/* Chat Messages */}
        <Box flex={1} overflowY="auto">
          <ChatMessages chats={apiData?.chats || []} />
        </Box>

        {/* Reply Box */}
        <ReplyBox />
      </Flex>
    </Flex>
  );
};

export default Home;
