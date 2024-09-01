import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormLabel,
    GridItem,
    Heading,
    Input,
    SimpleGrid,
    Spacer,
    Textarea,
} from "@chakra-ui/react";

export default function PrintOrderPage() {
    return (
        <>
            <Container w="90%" maxW="1400px" pb="100px">
                <Box height="100px">
                    <Heading
                        fontWeight="normal"
                        as="h2"
                        fontSize="26px"
                        fontFamily="Montserrat"
                        textAlign="center"
                    >
                        Đặt in theo yêu cầu
                    </Heading>
                </Box>

                <Box bgColor="app_grey.0" color="app_white.0" px="20%" py="40px">
                    <SimpleGrid
                        columns={{
                            base: 1,
                            xl: 3,
                        }}
                        spacing={10}
                    >
                        <GridItem>
                            <FormControl isRequired>
                                <FormLabel>Tên</FormLabel>
                                <Input placeholder=" "/>
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl isRequired>
                                <FormLabel>Số điện thoại</FormLabel>
                                <Input required placeholder=" "/>
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input placeholder=" "/>
                            </FormControl>
                        </GridItem>
                    </SimpleGrid>

                    <FormControl isRequired mt="40px">
                        <FormLabel>Địa chỉ giao hàng</FormLabel>
                        <Input/>
                    </FormControl>

                    <FormControl isRequired mt="40px">
                        <FormLabel>File</FormLabel>
                        <Input p={1} type="file"/>
                    </FormControl>

                    <FormControl isRequired mt="40px">
                        <FormLabel>Ghi chú</FormLabel>
                        <Textarea/>
                    </FormControl>

                    <Flex>
                        <Spacer/>
                        <Button
                            _hover={{
                                backgroundColor: "app_black.0",
                                color: "app_white.0",
                            }}
                            px="40px"
                            py="25px"
                            bgColor="app_blue.0"
                            color="app_white.0"
                            borderRadius="40px"
                            mt="40px"
                            zIndex="1"
                        >
                            Xác nhận
                        </Button>
                    </Flex>
                </Box>
            </Container>
        </>
    );
}
