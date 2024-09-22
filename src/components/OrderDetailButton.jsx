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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function OrderDetailButton() {
  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  return (
    <>
      <Box p="8px" width="100%" onClick={onOpen}>
        Chi tiết
      </Box>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        size="8xl"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Chi tiết đơn hàng
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Flex wrap="wrap" spacing={8}>
              <Box flex="2">
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
                  <FormControl mt={4}>
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
              <Box flex="5">
                <Box bg="white" borderRadius="md" boxShadow="sm" p={4}>
                  <Heading as="h2" size="sm" textAlign="center" mb={4}>
                    Sản phẩm
                  </Heading>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Mã sản phẩm</Th>
                        <Th>Tên sản phẩm</Th>
                        <Th>Ảnh</Th>
                        <Th>Giá tiền</Th>
                        <Th>Số lượng</Th>
                        <Th textAlign="end">Tổng cộng</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          <Text>1</Text>
                        </Td>
                        <Td>
                          <Text>Mô hình 1</Text>
                        </Td>
                        <Td>
                          <Image
                            src="https://designshack.net/wp-content/uploads/placeholder-image.png"
                            alt="Product Image"
                            w="100px"
                            objectFit="contain"
                          />
                        </Td>
                        <Td>1.200.000 đ</Td>
                        <Td>
                          <Flex align="center" justify="center">
                            <Text mx={2}>12</Text>
                          </Flex>
                        </Td>
                        <Td textAlign="end">
                          <Text fontWeight="bold">1.200.000 đ</Text>
                        </Td>
                      </Tr>
                      {/* Repeat the above Tr block for additional products */}
                    </Tbody>
                  </Table>
                  <Text fontWeight="bold" textAlign="end" pr={4} mt={4}>
                    Thành tiền: 4.800.000đ
                  </Text>
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
