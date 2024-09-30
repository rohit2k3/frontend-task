'use client';

import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import DateSeparator from './DateSeparator';

interface MessageProps {
  isUser: boolean;
  text: string;
  avatar: string;
  time: string;
}

const Message: React.FC<MessageProps> = ({ isUser, text, avatar, time }) => {
  return (
    <Box>
      <DateSeparator date={time} />

      <Flex
        alignSelf={isUser ? 'flex-end' : 'flex-start'}
        flexDirection={isUser ? 'row-reverse' : 'row'}
        my={2}
      >

        <Avatar src={avatar} size="sm" mr={isUser ? 0 : 2} ml={isUser ? 2 : 0} />
        <Box
          bg={isUser ? 'blue.500' : 'gray.100'}
          color={isUser ? 'white' : 'black'}
          p={3}
          borderRadius="md"
          maxW="70%"
        >
          <Text>{text}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Message;
