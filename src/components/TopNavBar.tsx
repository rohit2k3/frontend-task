'use client';

import { Box, Flex, IconButton, Text, Menu, MenuButton, MenuItem, MenuList, Avatar } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { FiEdit } from 'react-icons/fi';
import { SlPeople } from 'react-icons/sl';
import { LuPhone } from 'react-icons/lu';
import { BiMessageX } from 'react-icons/bi';
import { HiDotsVertical } from 'react-icons/hi';


interface MessageProps {
  avatar: string;
  fromName: string;
  toName: string;
  tripNo: string;
}

const TopNavBar: React.FC<MessageProps> = ({ avatar, fromName, toName, tripNo }) => {
  return (
    <Flex
      flexDirection="column"
      bg="#faf9f4"
    >

      <Flex
        alignItems="center"
        justifyContent="space-between"
        p={2}
        bg="#faf9f4"
      >
        <Flex
          alignItems="center"
          bg="#faf9f4">
          <IconButton bg={'transparent'} fontSize={'x-large'} icon={<ArrowBackIcon />} aria-label="Back" />
          <Text mx={2} fontWeight="bold" fontSize="x-large">{tripNo}</Text>
        </Flex>
        <FiEdit style={{margin:"0.5rem 1rem"}} fontSize="x-large"/>
      </Flex>

      {/* //second */}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        p={2}
        bg="#faf9f4"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Flex
          alignItems="center"
          bg="#faf9f4"
          mx={3}>
          <Avatar src={avatar} size="sm" />

          <Box mx={4}>
            <Text>
              <Text as={"span"} fontSize="lg">From </Text>
              <Text as={"span"} fontWeight="bold" fontSize="lg">{fromName}</Text>
            </Text>

            <Text>
              <Text as={"span"} fontSize="lg">To </Text>
              <Text as={"span"} fontWeight="bold" fontSize="lg">{toName}</Text>
            </Text>
          </Box>


        </Flex>
        <Menu>
          <MenuButton bg={'transparent'} as={IconButton} icon={<HiDotsVertical fontSize={'large'} />} />
          <MenuList>
            <MenuItem icon={<SlPeople fontSize={'large'} />}>Members</MenuItem>
            <MenuItem icon={<LuPhone fontSize={'large'} />}>Share Number</MenuItem>
            <MenuItem icon={<BiMessageX fontSize={'large'} />}>Report</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>

  );
};

export default TopNavBar;
