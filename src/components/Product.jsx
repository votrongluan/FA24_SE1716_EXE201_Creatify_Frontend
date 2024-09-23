import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Product({ product }) {
  console.log(product);

  return (
    <>
      <RouterLink to={`/products/${product.id}`}>
        <Image
          src={product.img}
          objectFit="cover"
          objectPosition="center"
          height="250px"
          w="100%"
        />
        <Text noOfLines={1} mt="20px" mb="10px">
          {product.name}
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
