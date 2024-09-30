'use client';

import { Avatar, AvatarBadge, Box, Flex, Text } from '@chakra-ui/react';
import DateSeparator from './DateSeparator';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

interface MessageProps {
  isUser: boolean;
  text: string;
  avatar: string;
  time: string;
  isKyc: boolean
}

const Message: React.FC<MessageProps> = ({ isUser, text, avatar, time, isKyc }) => {
  return (
    <Box>
      <DateSeparator date={time} />

      <Flex
        alignSelf={isUser ? 'flex-end' : 'flex-start'}
        flexDirection={isUser ? 'row-reverse' : 'row'}
        my={2}
      >

        <Avatar src={avatar} size="sm" mr={isUser ? 0 : 2} ml={isUser ? 2 : 0} >
          <AvatarBadge boxSize="1.25em" border={'none'} >
            {/* Check Icon in Blue */}
            {isKyc ? <RiVerifiedBadgeFill style={{ color: '#1c63d5', fontSize: '1.25em' }} /> : <></>}

          </AvatarBadge>
        </Avatar>
        <Box
          bg={isUser ? '#1c63d5' : '#ffffff'}
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
