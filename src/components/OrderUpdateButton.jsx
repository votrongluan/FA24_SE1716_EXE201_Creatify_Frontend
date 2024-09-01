import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Spacer,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "../api/axios";
import { useRef } from "react";

export default function OrderUpdateButton() {
  const toast = useToast();

  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  return (
    <>
      <Button
        onClick={onOpen}
        _hover={{
          color: "app_black.0",
          bgColor: "app_white.0",
        }}
        color="app_white.0"
        bgColor="app_blue.0"
      >
        Cập nhật
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cập nhật đơn hàng</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData);

                if (!data.phone.match(/^[0-9]{9,11}$/)) {
                  toast({
                    title: "Cập nhật thất bại",
                    description: "Số điện thoại không hợp lệ",
                    status: "error",
                    duration: 700,
                    isClosable: true,
                    position: "top-right",
                  });
                  return;
                }

                const res = await axios.post(
                  "/v1/clubInsert",
                  JSON.stringify(data),
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );

                if (res.data.status == "Ok") {
                  toast({
                    title: "Thêm thành công",
                    description: "Club đã được thêm vào hệ thống",
                    status: "success",
                    duration: 700,
                    isClosable: true,
                    position: "top-right",
                  });
                  onClose();
                  window.location.reload();
                } else {
                  toast({
                    title: "Thêm thất bại",
                    description: "Club không được thêm vào hệ thống",
                    status: "error",
                    duration: 700,
                    isClosable: true,
                    position: "top-right",
                  });
                }
              }}
            >
              <FormControl isRequired>
                <FormLabel>Trạng thái</FormLabel>
                <Select name="name" type="text" ref={initialRef}>
                  <option>Đã xử lý</option>
                  <option>Chưa xử lý</option>
                </Select>
              </FormControl>

              <HStack mt={10}>
                <Spacer />
                <Button colorScheme="blue" mr={3} type="submit">
                  Xác nhận
                </Button>
                <Button onClick={onClose}>Hủy</Button>
              </HStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
