import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Input,
  Spacer,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import CartItemDetail from "../../components/CartItemDetail";
import useCart from "../../hooks/useCart"; // Using custom hook for cart

export default function CartPage() {
  const { getCart, calculateTotalPrice } = useCart();
  const products = getCart(); // Fetch cart items from the context

  return (
    <Container w="90%" maxW="1400px" pb="100px">
      <Grid columnGap="60px" px="5%" templateColumns="repeat(3, 1fr)">
        <GridItem colSpan={{ base: 3, xl: 2 }} pb="20px">
          <Text
            pb="20px"
            borderBottom="1px solid rgba(256,256,256,0.4)"
            fontSize="20px"
          >
            Giỏ hàng
          </Text>

          <Stack>
            {products.map((product) => (
              <CartItemDetail key={product.productId} product={product} />
            ))}
          </Stack>
        </GridItem>

        <GridItem colSpan={{ base: 3, xl: 1 }} pb="20px">
          <Box mt="20px">
            <Text fontSize="20px" pb="20px">
              Thêm ghi chú
            </Text>
            <Textarea
              h="150px"
              fontSize="16px"
              color="app_white.0"
              placeholder="Hướng dẫn? Yêu cầu đặc biệt? Hãy thêm chúng tại đây"
            />
          </Box>

          <Box mt="20px">
            <Text fontSize="20px" pb="20px">
              Địa chỉ giao hàng
            </Text>
            <Input
              fontSize="16px"
              color="app_white.0"
              placeholder="Hướng dẫn? Yêu cầu đặc biệt? Hãy thêm chúng tại đây"
            />
          </Box>

          <Box>
            <Text
              pb="20px"
              borderBottom="1px solid rgba(256,256,256,0.4)"
              fontSize="20px"
              mt="40px"
            >
              Tóm tắt đơn hàng
            </Text>

            <Stack
              borderBottom="1px solid rgba(256,256,256,0.4)"
              spacing="20px"
              py="20px"
              fontSize="16px"
            >
              <HStack>
                <Text>Sản phẩm</Text>
                <Spacer />
                <Text>{calculateTotalPrice().toLocaleString()}đ</Text>{" "}
                {/* Dynamic total price */}
              </HStack>

              <HStack>
                <Text>Giao hàng</Text>
                <Spacer />
                <Text>30.000đ</Text>
              </HStack>
            </Stack>

            <HStack fontSize="20px" py="20px">
              <Text>Tổng</Text>
              <Spacer />
              <Text>
                {(calculateTotalPrice() + 30000).toLocaleString()}đ
              </Text>{" "}
              {/* Dynamic grand total */}
            </HStack>

            <Button
              _hover={{
                opacity: ".8",
              }}
              w="100%"
              bgColor="app_blue.0"
              color="app_white.0"
              borderRadius="0"
              mt="40px"
            >
              Thanh toán
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
