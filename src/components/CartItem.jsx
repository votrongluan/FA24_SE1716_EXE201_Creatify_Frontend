import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function CartItem() {
  return (
    <>
      <Flex columnGap={4}>
        <Image
          height="80px"
          width="80px"
          src="https://designshack.net/wp-content/uploads/placeholder-image.png"
        />
        <Box>
          <Text fontSize="16px">Bugati</Text>
          <Text fontSize="16px" fontWeight="bold">
            2.500.000đ
          </Text>
          <Text>Số lượng: 12</Text>
        </Box>
      </Flex>
    </>
  );
}
