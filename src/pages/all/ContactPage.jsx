import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    GridItem,
    Heading,
    Input,
    SimpleGrid,
    Textarea,
} from "@chakra-ui/react";

function ContactPage() {
    return (
        <>
            <Container w="90%" maxW="1400px" pb="100px">
                <Box height="100px">
                    <Heading
                        fontWeight="normal"
                        as="h2"
                        fontSize="26px"
                        fontFamily="Montserrat"
                    >
                        Liên hệ với chúng tôi
                    </Heading>
                </Box>

                <Box
                    bgColor="app_white.0"
                    color="app_black.0"
                    padding="40px"
                    borderRadius="10px"
                    width={{
                        base: "100%",
                        xl: "80%",
                    }}
                >
                    <SimpleGrid
                        columns={{
                            base: 1,
                            xl: 3,
                        }}
                        spacing={10}
                    >
                        <GridItem>
                            <FormControl>
                                <FormLabel>Tên của bạn</FormLabel>
                                <Input variant="flushed" placeholder=" "/>
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormLabel>Họ của bạn</FormLabel>
                                <Input variant="flushed" placeholder=" "/>
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormLabel>Email của bạn</FormLabel>
                                <Input variant="flushed" placeholder=" "/>
                            </FormControl>
                        </GridItem>
                    </SimpleGrid>

                    <SimpleGrid
                        mt="40px"
                        columns={{
                            base: 1,
                            xl: 3,
                        }}
                        spacing={10}
                    >
                        <GridItem>
                            <FormControl>
                                <FormLabel>Số điện thoại của bạn</FormLabel>
                                <Input variant="flushed" placeholder=" "/>
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormLabel>Công việc của bạn</FormLabel>
                                <Input variant="flushed" placeholder=" "/>
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormLabel>Bạn cần hỗ trợ gì</FormLabel>
                                <Input variant="flushed" placeholder=" "/>
                            </FormControl>
                        </GridItem>
                    </SimpleGrid>

                    <FormControl mt="40px">
                        <FormLabel>Để lại tin nhắn cho chúng tôi</FormLabel>
                        <Textarea variant="flushed" placeholder=" "/>
                    </FormControl>

                    <Button
                        _hover={{
                            backgroundColor: "app_blue.0",
                            color: "app_white.0",
                        }}
                        px="40px"
                        py="25px"
                        bgColor="app_black.0"
                        color="app_white.0"
                        borderRadius="40px"
                        mt="40px"
                        zIndex="1"
                    >
                        Gửi tin nhắn
                    </Button>
                </Box>
            </Container>
        </>
    );
}

export default ContactPage;
