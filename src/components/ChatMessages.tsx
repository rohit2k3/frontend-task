'use client';

import { Box, Spinner, Center } from '@chakra-ui/react';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Message from './Message';
import axios from 'axios';

interface ChatMessage {
  id: string;
  message: string;
  sender: {
    image: string;
    self: boolean;
    is_kyc_verified: boolean;
  };
  time: string;
}

const ChatMessages: React.FC = () => {
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [page, setPage] = useState(0);
  const [isInitialScrollDone, setIsInitialScrollDone] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const previousScrollHeightRef = useRef<number>(0);

  const fetchChats = async (pageNum: number) => {
    setLoadingMore(true);
    try {
      const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${pageNum}`);
      setChats((prevChats) => [...response.data.chats, ...prevChats]);
    } catch (error) {
      console.error('Error fetching chat data:', error);
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchChats(page);
  }, [page]);

  useLayoutEffect(() => {
    if (chats.length > 0 && !isInitialScrollDone) {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView();
      }
      setIsInitialScrollDone(true);
    }
  }, [chats, isInitialScrollDone]);

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight } = chatContainerRef.current;
      previousScrollHeightRef.current = scrollHeight;

      if (scrollTop === 0 && !loadingMore) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    if (loadingMore && chatContainerRef.current) {
      const newScrollHeight = chatContainerRef.current.scrollHeight;
      const heightDifference = newScrollHeight - previousScrollHeightRef.current;
      chatContainerRef.current.scrollTop = heightDifference;
    }
  }, [loadingMore, chats]);

  return (
    <Box
      bg={'#faf9f4'}
      p={4}
      maxH="100%"
      overflowY="auto"
      onScroll={handleScroll}
      ref={chatContainerRef}
    >
      {loadingMore && (
        <Center>
          <Spinner size="md" color="blue.500" />
        </Center>
      )}
      
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
