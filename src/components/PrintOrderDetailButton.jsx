import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  Heading,
  Badge,
  Flex,
  Text,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import { Download } from "@mui/icons-material";
import { useRef } from "react";

export default function PrintOrderDetailButton() {
  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  return (
    <>
      <Button
        onClick={onOpen}
        _hover={{
          color: "app_white.0",
          bgColor: "app_black.0",
        }}
        color="app_black.0"
        bgColor="app_white.0"
      >
        Chi tiết
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="4xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Chi tiết đơn hàng
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Flex>
              <Box flex="1">
                <Box bg="white" borderRadius="md" boxShadow="sm" p={4}>
                  <Heading as="h2" size="sm" textAlign="center">
                    Thông tin đơn hàng
                  </Heading>
                  <FormControl mt={4}>
                    <FormLabel>
                      <Flex alignItems="center">
                        <Text>Mã đơn hàng </Text>
                        <Badge colorScheme="green" ml={2}>
                          Đã xử lý
                        </Badge>
                      </Flex>
                    </FormLabel>
                    <Input
                      value="OD202406200001"
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl>
                  <FormControl color="gray.400" mt={2}>
                    Tải file xuống
                    <Link
                      p="20px"
                      ml="40px"
                      color="app_blue.0"
                      target="_blank"
                      href="order.file"
                      verticalAlign="baseline"
                    >
                      File
                    </Link>
                  </FormControl>
                  <FormControl mt={8}>
                    <FormLabel>Ngày đặt</FormLabel>
                    <Input
                      value="22/12/2023"
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Tên</FormLabel>
                    <Input
                      value="Nguyễn Văn A"
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Số điện thoại</FormLabel>
                    <Input
                      value="0982934834"
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Địa chỉ giao hàng</FormLabel>
                    <Input
                      value="1775 đường Nguyễn Bình, quận 6, TP.HCM"
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      value="example@example.com"
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Thành tiền</FormLabel>
                    <Input
                      _readOnly={{ bg: "gray.100" }}
                      value="4.800.000 đ"
                      readOnly
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Ghi chú của bạn</FormLabel>
                    <Textarea
                      _readOnly={{ bg: "gray.100" }}
                      value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium necessitatibus impedit quia error tempora cum harum nemo dicta. Dolore atque in officia rerum et doloribus est quos, numquam praesentium."
                      height="150px"
                      readOnly
                    />
                  </FormControl>
                </Box>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Đóng
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
