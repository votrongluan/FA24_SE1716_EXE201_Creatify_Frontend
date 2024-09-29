import { useContext, useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Product from "../../components/Product";
import { GlobalContext } from "../../context/GlobalContext";

export default function ProductsPage() {
  const { products } = useContext(GlobalContext);
  const minPrice = 0;
  const maxPrice = 10000000;
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [sortOption, setSortOption] = useState("Đề xuất");
  const [visibleProductsCount, setVisibleProductsCount] = useState(20); // Manage visible products count

  const optionStyle = {
    backgroundColor: "#00060F",
    color: "white",
  };

  // Filter and sort products based on selected criteria
  const filteredProducts = products
    .filter((product) => {
      // Filter by category
      if (selectedCategory !== -1) {
        return product.category === selectedCategory;
      }
      return true;
    })
    .filter((product) => {
      // Filter by price range
      return product.price >= priceRange[0] && product.price <= priceRange[1];
    })
    .sort((a, b) => {
      // Sort products based on selected sorting option
      if (sortOption === "Giá (thấp đến cao)") {
        return a.price - b.price;
      } else if (sortOption === "Giá (cao đến thấp)") {
        return b.price - a.price;
      } else if (sortOption === "Tên A-Z") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "Tên Z-A") {
        return b.name.localeCompare(a.name);
      }
      return 0; // Default sort (Đề xuất)
    });

  // Show only the visible products (initially 20)
  const visibleProducts = filteredProducts.slice(0, visibleProductsCount);

  const handleShowMore = () => {
    setVisibleProductsCount((prevCount) => prevCount + 20); // Increase visible products count by 20
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
              <Box
                py="10px"
                _hover={{ color: "app_blue.0", cursor: "pointer" }}
                onClick={() => {
                  setSelectedCategory(-1);
                  setVisibleProductsCount(20);
                }}
                transition="color 0.3s ease"
              >
                Tất cả sản phẩm
              </Box>
              <Box
                py="10px"
                _hover={{ color: "app_blue.0", cursor: "pointer" }}
                onClick={() => {
                  setSelectedCategory(0);
                  setVisibleProductsCount(20);
                }}
                transition="color 0.3s ease"
              >
                Anime
              </Box>
              <Box
                py="10px"
                _hover={{ color: "app_blue.0", cursor: "pointer" }}
                onClick={() => {
                  setSelectedCategory(1);
                  setVisibleProductsCount(20);
                }}
                transition="color 0.3s ease"
              >
                Decoration
              </Box>
              <Box
                py="10px"
                _hover={{ color: "app_blue.0", cursor: "pointer" }}
                onClick={() => {
                  setSelectedCategory(2);
                  setVisibleProductsCount(20);
                }}
                transition="color 0.3s ease"
              >
                Game
              </Box>
              <Box
                py="10px"
                _hover={{ color: "app_blue.0", cursor: "pointer" }}
                onClick={() => {
                  setSelectedCategory(3);
                  setVisibleProductsCount(20);
                }}
                transition="color 0.3s ease"
              >
                Movie
              </Box>
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
              min={minPrice}
              max={maxPrice}
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
                color="app_white.0"
                cursor="pointer"
                width="fit-content"
                outline="none"
                border="none"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
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
              {visibleProducts.map((product) => (
                <GridItem key={product.productId}>
                  <Product product={product} />
                </GridItem>
              ))}
            </SimpleGrid>

            {visibleProductsCount < filteredProducts.length && (
              <Flex mt="40px" justifyContent="center">
                <Button
                  onClick={handleShowMore}
                  bg="app_black.0"
                  color="app_white.0"
                >
                  Hiển thị thêm
                </Button>
              </Flex>
            )}
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
