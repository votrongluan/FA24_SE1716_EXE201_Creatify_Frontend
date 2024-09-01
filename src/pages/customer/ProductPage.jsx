import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Collapse,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ShareBar from "../../components/ShareBar";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function ProductPage() {
  const { isOpen, onToggle } = useDisclosure();

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
          <BreadcrumbItem>
            <RouterLink to="/products/1">
              <BreadcrumbLink>Black goku</BreadcrumbLink>
            </RouterLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Grid
          px="10%"
          columnGap="40px"
          rowGap="40px"
          mt="60px"
          templateColumns="repeat(2,1fr)"
        >
          <GridItem
            colSpan={{
              base: 2,
              xl: 1,
            }}
          >
            <Image
              border="1.5px solid"
              borderColor="rgba(255,255,255,.7)"
              w="100%"
              objectFit="cover"
              objectPosition="center"
              src="https://designshack.net/wp-content/uploads/placeholder-image.png"
            />
          </GridItem>

          <GridItem
            colSpan={{
              base: 2,
              xl: 1,
            }}
          >
            <Text fontSize="26px">Black goku</Text>

            <Text fontSize="20px" mt="30px">
              2.200.000đ
            </Text>

            <Text
              textAlign="justify"
              fontSize="16px"
              mt="20px"
              color="app_grey.1"
            >
              Mô tả: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Minima architecto reiciendis consectetur mollitia nobis veniam,
              error corporis recusandae illum nihil harum molestias iure odit
              cupiditate beatae vel, dolore iste quaerat.
            </Text>

            <Box mt="20px">
              <Text color="app_white.0" fontSize="14px">
                Số lượng
              </Text>
              <NumberInput
                w="80px"
                bgColor="app_white.0"
                color="app_black.0"
                defaultValue={15}
                min={1}
                max={5}
                mt="5px"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>

            <Button
              _hover={{
                opacity: ".7",
              }}
              w="100%"
              bgColor="app_blue.0"
              color="app_white.0"
              borderRadius="0"
              mt="30px"
            >
              Thêm vào giỏ hàng
            </Button>

            <ShareBar />
          </GridItem>
        </Grid>

        <Box textAlign="center" mt="100px">
          <Text fontSize="26px" fontFamily="Montserrat">
            Chỉnh sửa mô hình từ sản phẩm
          </Text>
          <Flex justifyContent="center">
            <Text
              w={{
                base: "80%",
                xl: "40%",
              }}
              mt="40px"
              fontSize="16px"
            >
              Dùng mô hình này của chúng tôi để chỉnh sửa theo ý của bạn và đặt
              in theo yêu cầu. Đây là tính năng mà chúng tôi đang phối hợp cùng
              đội ngũ phát triển của công ty Google nhằm mang đến trải nghiệm
              tốt nhất cho khách hàng. Hiện chức năng vẫn chưa hoàn thiện nhưng
              khách hàng có thể xem một bản demo trên{" "}
              <ChakraLink color="app_blue.0" href="https://youtube.com">
                youtube
              </ChakraLink>
            </Text>
          </Flex>
          <Box>
            <Button
              mt="40px"
              onClick={onToggle}
              _hover={{
                opacity: ".7",
              }}
              px="40px"
              py="8px"
              bgColor="app_white.0"
              color="app_black.0"
              borderRadius="20px"
            >
              Chỉnh sửa
            </Button>
            <Collapse in={isOpen} animateOpacity>
              <Box
                p="20px"
                mt="20px"
                color="white"
                bg="app_grey.2"
                rounded="md"
                shadow="md"
              >
                Đây là tính năng đang trong quá trình phát triển và triển khai
              </Box>
            </Collapse>
          </Box>
        </Box>
      </Container>
    </>
  );
}
