'use client';
import { Box, Flex, IconButton, Input, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { ImAttachment } from "react-icons/im";
import { VscSend } from 'react-icons/vsc';
import { LuCamera, LuFileText, LuVideo } from 'react-icons/lu';
const ReplyBox: React.FC = () => {
  return (
    <Flex
      p={4}
      alignItems="center"
      bg="#faf9f4"
    >
      <Flex
        bg={'white'}
        alignItems="center"
        width={'100%'}
        p={0}
        borderRadius={'0.5rem'}
      >

        <Input
          border={'none'}
          flex={1}
          mx={0}
          placeholder="Type a message..."
          variant="filled"
          bg="white"
        />
        <Menu>
          <MenuButton bg={'transparent'} as={IconButton} icon={<ImAttachment />} />
          <MenuList
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="auto"   // Ensures the MenuList takes appropriate width
            minWidth="150px" // Sets a minimum width for better layout
            bg={'#008000'}
            borderRadius={'2rem'}
            border={'none'}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="auto"
              px={4}        // Adds padding for a nicer layout
            >
              <IconButton color={"white"} bg={'transparent'} icon={<LuCamera fontSize={'x-large'} />} aria-label="Chat" />
              <IconButton color={"white"} bg={'transparent'} icon={<LuVideo fontSize={'x-large'} />} aria-label="Attachment" ml={2} />
              <IconButton color={"white"} bg={'transparent'} icon={<LuFileText fontSize={'x-large'} />} aria-label="Attachment" ml={2} />
            </Box>
          </MenuList>
        </Menu>
        <IconButton bg={'transparent'} icon={<VscSend fontSize={"large"} />} aria-label="Send" />
      </Flex>
    </Flex>
  );
};

export default ReplyBox;
