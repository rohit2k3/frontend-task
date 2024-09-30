import { Box, Flex, Text, Divider } from '@chakra-ui/react';

interface DateSeparatorProps {
  date: string;
}

const DateSeparator: React.FC<DateSeparatorProps> = ({ date }) => {
  return (
    <Flex alignItems="center" my={4}>
      {/* Left line */}
      <Box flex="1">
        <Divider color={'#b7b7b7'}/>
      </Box>
      
      {/* Date text in the center */}
      <Text fontSize="xs" color="#b7b7b7" mx={2}>
        {date}
      </Text>
      
      {/* Right line */}
      <Box flex="1">
        <Divider color={'#b7b7b7'} bg={'#b7b7b7'} />
      </Box>
    </Flex>
  );
};

export default DateSeparator;
