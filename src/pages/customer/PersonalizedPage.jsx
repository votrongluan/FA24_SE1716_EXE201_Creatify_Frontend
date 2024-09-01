import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Flex,
} from "@chakra-ui/react";

export default function PersonalizedPage() {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Flex justifyContent="center">
                <Button
                    bgColor="app_blue.0"
                    color="app_white.0"
                    onClick={onOpen}
                    colorScheme="blue"
                    _hover={{
                        color: "app_black.0",
                        bgColor: "app_white.0",
                    }}
                >
                    Mở ứng dụng chỉnh sửa 3D
                </Button>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
                <ModalOverlay/>
                <ModalContent bg="transparent" boxShadow="none">
                    <ModalCloseButton zIndex="1" color="white"/>
                    <Box>
                        <iframe
                            style={{
                                display: "block",
                                position: "relative",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                            src="https://my.spline.design/bugati-b9193452067cfd69c000a6936e17dacc/"
                            frameBorder="0"
                            width={window.innerWidth}
                            height={window.innerHeight}
                        ></iframe>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    );
}
