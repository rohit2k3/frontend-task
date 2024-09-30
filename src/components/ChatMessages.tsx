'use client';

import { Box } from '@chakra-ui/react';
import Message from './Message';


interface ApiData {
  chats: { id: string; message: string; sender: { image: string; self: boolean }; time: string }[];
}



const ChatMessages: React.FC<ApiData> = ({ chats }) => {
  console.log(chats);
  
  return (
    <Box bg={'#faf9f4'} p={4}>
      {chats.map((data) => {
        return (
          <Message
            key={data.id}
            isUser={data.sender.self}
            text={data.message}
            avatar={data.sender.image}
            time={data.time}
          />
        );
      })}
      
      {/* <Message
        isUser={false}
        text="Connect with fellow travelers, share the ride and save money"
        avatar="/path-to-avatar.jpg"
      /> */}
      {/* <Message
        isUser={true}
        text="Connect with fellow travelers, share the ride and save money"
        avatar="/path-to-avatar2.jpg"
      /> */}
    </Box>
  );
};

export default ChatMessages;
