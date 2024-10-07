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
import {
  printOrderStatusColorMap,
  printOrderStatusMap,
} from "../data/globalData";

export default function PrintOrderDetailButton({ order }) {
  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  return (
    <>
      <Box p="8px" onClick={onOpen} width="100%">
        Chi tiết
      </Box>

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
                        <Badge
                          p={2}
                          color={printOrderStatusColorMap[order?.status]}
                          ml={2}
                        >
                          {printOrderStatusMap[order?.status]}
                        </Badge>
                      </Flex>
                    </FormLabel>
                    <Input
                      value={order?.printOrderId}
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl>
                  <FormControl color="gray.400" mt={2}>
                    Đường dẫn đến thư mục
                    <Link
                      p="20px"
                      color="app_blue.0"
                      target="_blank"
                      href={order?.fileLink}
                      verticalAlign="baseline"
                    >
                      {order?.fileLink}
                    </Link>
                  </FormControl>
                  {/* <FormControl mt={8}>
                    <FormLabel>Ngày đặt</FormLabel>
                    <Input
                      value="22/12/2023"
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl> */}
                  <FormControl mt={4}>
                    <FormLabel>Tên</FormLabel>
                    <Input
                      value={order?.name}
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Số điện thoại</FormLabel>
                    <Input
                      value={order?.phone}
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Địa chỉ giao hàng</FormLabel>
                    <Input
                      value={order?.shipAddress}
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      value={order?.email}
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Thành tiền</FormLabel>
                    <Input
                      _readOnly={{ bg: "gray.100" }}
                      value={order?.price ? order.price : "Chưa cập nhật giá tiền"}
                      readOnly
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Ghi chú của bạn</FormLabel>
                    <Textarea
                      _readOnly={{ bg: "gray.100" }}
                      value={order?.note}
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
