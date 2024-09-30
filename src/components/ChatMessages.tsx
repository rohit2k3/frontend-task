'use client';

import { Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import Message from './Message';

interface ApiData {
  chats: { 
    id: string; 
    message: string; 
    sender: { 
      image: string; 
      self: boolean; 
      is_kyc_verified: boolean 
    }; 
    time: string; 
  }[];
}

const ChatMessages: React.FC<ApiData> = ({ chats }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null); 

  //scroll behavior
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chats]);

  return (
    <Box bg={'#faf9f4'} p={4} maxH="100%" overflowY="auto">
      {chats.map((data) => (
        <Message
          key={data.id}
          isUser={data.sender.self}
          text={data.message}
          avatar={data.sender.image}
          time={data.time}
          isKyc={data.sender.is_kyc_verified}
        />
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default ChatMessages;
