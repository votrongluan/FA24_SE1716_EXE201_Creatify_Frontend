import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Product() {
  return (
    <>
      <RouterLink to="/products/1">
        <Image
          src="https://designshack.net/wp-content/uploads/placeholder-image.png"
          objectFit="cover"
          objectPosition="center"
          height="250px"
          w="100%"
        />
        <Text mt="20px" mb="10px">
          Black Goku
        </Text>
        <Box width="20px" height="1px" bgColor="app_white.0"></Box>
        <Text color="app_grey.1" mt="10px">
          2.200.000đ
        </Text>
      </RouterLink>
      <Button
        _hover={{
          opacity: ".7",
        }}
        w="100%"
        bgColor="app_white.0"
        color="app_black.0"
        borderRadius="0"
        mt="20px"
      >
        Thêm vào giỏ hàng
      </Button>
    </>
  );
}
