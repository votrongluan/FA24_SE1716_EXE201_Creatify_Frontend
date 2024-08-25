import React, { useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import Product from "../../components/Product";

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([10, 30]);
  const optionStyle = {
    backgroundColor: "#00060F",
    color: "white",
  };

  return (
    <>
      <Container w="90%" maxW="1400px" pb="100px">
        <Breadcrumb fontSize="16px" separator=">">
          <BreadcrumbItem>
            <RouterLink to="/">
              <BreadcrumbLink>Trang chủ</BreadcrumbLink>
            </RouterLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <RouterLink to="/products">
              <BreadcrumbLink>Tất cả sản phẩm</BreadcrumbLink>
            </RouterLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Grid
          mt="40px"
          columnGap="80px"
          rowGap="40px"
          templateColumns="repeat(5, 1fr)"
        >
          <GridItem colSpan={{ base: 5, xl: 1 }}>
            <Text
              borderBottom="1px solid rgba(256,256,256,0.4)"
              pb="20px"
              fontSize="20px"
            >
              Duyệt theo
            </Text>

            <Stack mt="10px" spacing="0">
              <ChakraLink
                as={RouterLink}
                to={"/"}
                py="10px"
                _hover={{ color: "app_blue.0" }}
                transition="color 0.3s ease"
              >
                Tất cả sản phẩm
              </ChakraLink>
              <ChakraLink
                as={RouterLink}
                to={"/"}
                py="10px"
                _hover={{ color: "app_blue.0" }}
                transition="color 0.3s ease"
              >
                Anime
              </ChakraLink>
              <ChakraLink
                as={RouterLink}
                to={"/"}
                py="10px"
                _hover={{ color: "app_blue.0" }}
                transition="color 0.3s ease"
              >
                Decoration
              </ChakraLink>
              <ChakraLink
                as={RouterLink}
                to={"/"}
                py="10px"
                _hover={{ color: "app_blue.0" }}
                transition="color 0.3s ease"
              >
                Game
              </ChakraLink>
              <ChakraLink
                as={RouterLink}
                to={"/"}
                py="10px"
                _hover={{ color: "app_blue.0" }}
                transition="color 0.3s ease"
              >
                Movie
              </ChakraLink>
            </Stack>

            <Text
              borderBottom="1px solid rgba(256,256,256,0.4)"
              pb="20px"
              mt="80px"
              fontSize="20px"
            >
              Lọc giá
            </Text>

            <RangeSlider
              mt="20px"
              aria-label={["min", "max"]}
              defaultValue={priceRange}
              min={0}
              max={100}
              onChangeEnd={(val) => setPriceRange(val)}
            >
              <RangeSliderTrack bgColor="app_grey.0">
                <RangeSliderFilledTrack bgColor="app_white.0" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>

            <Text mt="10px" fontSize="18px"></Text>
            <HStack>
              <Text>{priceRange[0]}đ</Text>
              <Spacer />
              <Text>{priceRange[1]}đ</Text>
            </HStack>
          </GridItem>

          <GridItem colSpan={{ base: 5, xl: 4 }}>
            <Text fontSize="26px" fontFamily="Montserrat">
              Tất cả sản phẩm
            </Text>

            <Flex alignItems="center">
              <Box flex="1"></Box>
              <Text>Sắp xếp theo: </Text>
              <Select
                bg="app_black.0"
                bgColor="app_black.0"
                color="app_white.0"
                cursor="pointer"
                width="fit-content"
                outline="none"
                border="none"
              >
                <option style={optionStyle}>Đề xuất</option>
                <option style={optionStyle}>Mới nhất</option>
                <option style={optionStyle}>Giá (thấp đến cao)</option>
                <option style={optionStyle}>Giá (cao đến thấp)</option>
                <option style={optionStyle}>Tên A-Z</option>
                <option style={optionStyle}>Tên Z-A</option>
              </Select>
            </Flex>

            <SimpleGrid
              mt="40px"
              rowGap="40px"
              columnGap="40px"
              columns={{
                base: 1,
                lg: 3,
                xl: 4,
              }}
            >
              <GridItem>
                <Product />
              </GridItem>
              <GridItem>
                <Product />
              </GridItem>
              <GridItem>
                <Product />
              </GridItem>
              <GridItem>
                <Product />
              </GridItem>
              <GridItem>
                <Product />
              </GridItem>
              <GridItem>
                <Product />
              </GridItem>
              <GridItem>
                <Product />
              </GridItem>
              <GridItem>
                <Product />
              </GridItem>
              <GridItem>
                <Product />
              </GridItem>
              <GridItem>
                <Product />
              </GridItem>
              <GridItem>
                <Product />
              </GridItem>
              <GridItem>
                <Product />
              </GridItem>
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
