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

export default function PersonalizedPage({ onOpen }) {
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
    </>
  );
}
