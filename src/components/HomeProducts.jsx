import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function HomeProduct() {
  return (
    <>
      <Box w="100%" bgColor="app_black.0" pt="80px" pb="80px">
        <Container w="90%" maxW="1400px">
          <Text textAlign="center" fontFamily="Montserrat" fontSize="40px">
            Khám phá các sản phẩm của chúng tôi
          </Text>

          <Box mt="60px">
            <SimpleGrid
              columnGap="40px"
              rowGap="40px"
              columns={{ base: 2, xl: 4 }}
            >
              <GridItem to="/products/1" as={RouterLink}>
                <Image
                  w="100%"
                  src="https://via.placeholder.com/150"
                  objectFit="cover"
                  objectPosition="center"
                />
              </GridItem>
              <GridItem to="/products/1" as={RouterLink}>
                <Image
                  w="100%"
                  src="https://via.placeholder.com/150"
                  objectFit="cover"
                  objectPosition="center"
                />
              </GridItem>
              <GridItem to="/products/1" as={RouterLink}>
                <Image
                  w="100%"
                  src="https://via.placeholder.com/150"
                  objectFit="cover"
                  objectPosition="center"
                />
              </GridItem>
              <GridItem to="/products/1" as={RouterLink}>
                <Image
                  w="100%"
                  src="https://via.placeholder.com/150"
                  objectFit="cover"
                  objectPosition="center"
                />
              </GridItem>
            </SimpleGrid>

            <Flex justifyContent="center">
              <Button
                _hover={{
                  bgColor: "app_white.0",
                  color: "app_black.0",
                }}
                bgColor="app_blue.0"
                color="app_white.0"
                borderRadius="40px"
                mt="80px"
                px="40px"
                py="25px"
                to="/products"
                as={RouterLink}
              >
                Xem tất cả
              </Button>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
}
