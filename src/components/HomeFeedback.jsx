import {
  Box,
  Container,
  Flex,
  GenericAvatarIcon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import SlideWrapper from "./SlideWrapper";

export default function HomeFeedback() {
  return (
    <>
      <Box w="100%" bgColor="app_grey.0" pb="160px">
        <Container w="90%" maxW="1400px" bgColor="app_grey.0" pb="80px">
          <SlideWrapper direction="top" speed=".6s">
            <Text
              pl="16px"
              borderBottomLeftRadius="10px"
              borderBottomRightRadius="10px"
              py="12px"
              fontWeight="bold"
              fontSize="18px"
              fontFamily="Montserrat"
              width="340px"
              bgColor="white"
              color="app_black.0"
            >
              Đánh giá từ khách hàng
            </Text>
          </SlideWrapper>

          <Box mt="60px">
            <SimpleGrid
              columns={{
                base: 1,
                xl: 3,
              }}
            >
              <Box height="160px" bgColor="app_grey.0" padding="50px">
                <Box position="relative">
                  <SlideWrapper direction="top" speed="1.5s">
                    <Box
                      position="absolute"
                      height="150px"
                      width="8px"
                      bgColor="app_blue.0"
                      top="-20px"
                      left="-30px"
                      borderRadius="20px"
                    ></Box>
                  </SlideWrapper>

                  <SlideWrapper direction="left" speed="1s">
                    <Text height="150px" fontSize="16px" textAlign="justify">
                      Chất lượng sản phẩm rất cao và giá thành hợp lý. Tôi sẽ
                      quay lại và mua thêm sản phẩm mới.
                    </Text>
                  </SlideWrapper>

                  <Flex
                    flexDirection={{ base: "column", xl: "row" }}
                    mt="30px"
                    ml="-30px"
                    columnGap="20px"
                    rowGap="20px"
                  >
                    <GenericAvatarIcon
                      bgColor="app_black.0"
                      borderRadius="10px"
                      height="60px"
                      width="60px"
                    />
                    <Box>
                      <Text>Samantha Reed</Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>

              <Box
                mt={{
                  base: "170px",
                  xl: "0",
                }}
                height="160px"
                bgColor="app_grey.0"
                padding="50px"
              >
                <Box position="relative">
                  <SlideWrapper direction="top" speed="1.5s">
                    <Box
                      position="absolute"
                      height="150px"
                      width="8px"
                      bgColor="app_blue.0"
                      top="-20px"
                      left="-30px"
                      borderRadius="20px"
                    ></Box>
                  </SlideWrapper>

                  <SlideWrapper direction="left" speed="1s">
                    <Text height="150px" fontSize="16px" textAlign="justify">
                      Chất lượng sản phẩm rất cao và giá thành hợp lý. Tôi sẽ
                      quay lại và mua thêm sản phẩm mới.
                    </Text>
                  </SlideWrapper>

                  <Flex
                    flexDirection={{ base: "column", xl: "row" }}
                    mt="30px"
                    ml="-30px"
                    columnGap="20px"
                    rowGap="20px"
                  >
                    <GenericAvatarIcon
                      bgColor="app_black.0"
                      borderRadius="10px"
                      height="60px"
                      width="60px"
                    />
                    <Box>
                      <Text>Samantha Reed</Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
              <Box
                mt={{
                  base: "170px",
                  xl: "0",
                }}
                height="160px"
                bgColor="app_grey.0"
                padding="50px"
              >
                <Box position="relative">
                  <SlideWrapper direction="top" speed="1.5s">
                    <Box
                      position="absolute"
                      height="150px"
                      width="8px"
                      bgColor="app_blue.0"
                      top="-20px"
                      left="-30px"
                      borderRadius="20px"
                    ></Box>
                  </SlideWrapper>

                  <SlideWrapper direction="left" speed="1s">
                    <Text height="150px" fontSize="16px" textAlign="justify">
                      Chất lượng sản phẩm rất cao và giá thành hợp lý. Tôi sẽ
                      quay lại và mua thêm sản phẩm mới.
                    </Text>
                  </SlideWrapper>

                  <Flex
                    flexDirection={{ base: "column", xl: "row" }}
                    mt="30px"
                    ml="-30px"
                    columnGap="20px"
                    rowGap="20px"
                  >
                    <GenericAvatarIcon
                      bgColor="app_black.0"
                      borderRadius="10px"
                      height="60px"
                      width="60px"
                    />
                    <Box>
                      <Text>Samantha Reed</Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
