import { useParams } from "react-router-dom";
import {
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
  Container,
  Link,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios, { appURL } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import {
  orderStatusColorMap,
  orderStatusMap,
  printOrderStatusColorMap,
  printOrderStatusMap,
} from "../../data/globalData";

export default function PrintOrderDetailPage() {
  const { id } = useParams();
  const { auth } = useAuth();
  const [order, setOrder] = useState(null);

  function fetchProductOrders() {
    axios
      .get(`/PrintOrder/GetAllPrintOrders`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        const tmpOrder = data.find(
          (item) =>
            item.printOrderId == id && item.customerId == auth.EmployeeId
        );
        setOrder(tmpOrder);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function calculatePrice(orderDetail, additional = 0) {
    let sum = additional;

    orderDetail.forEach((item) => (sum += item.products.price * item.quantity));

    return sum.toLocaleString();
  }

  useEffect(() => {
    fetchProductOrders();
  }, []);

  if (!order) {
    return <></>;
  } else {
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
              Chi tiết đơn in
            </Heading>
          </Box>

          <Box borderRadius="10px" bg="white" color="app_black.0">
            <Box>
              <Box boxShadow="sm" p={8}>
                <Heading as="h2" size="sm" textAlign="center">
                  Thông tin đơn in
                </Heading>

                <FormControl mt={4}>
                  <FormLabel>
                    <Flex alignItems="center">
                      <Text>Mã đơn hàng </Text>
                      <Badge
                        color={printOrderStatusColorMap[order.status]}
                        p={2}
                        ml={2}
                      >
                        {printOrderStatusMap[order.status]}
                      </Badge>
                    </Flex>
                  </FormLabel>
                  <Input
                    value={order.printOrderId}
                    readOnly
                    _readOnly={{ bg: "gray.100" }}
                  />
                </FormControl>

                <Text mt={4} fontWeight="bold">
                  Đường dẫn đến thư mục:{" "}
                  <Link href={order.fileLink} isExternal color="app_blue.0">
                    {order.fileLink}
                  </Link>
                </Text>

                <FormControl mt={8}>
                  <FormLabel>Ngày đặt</FormLabel>
                  <Input
                    value={new Date(order?.date).toLocaleDateString("vi-VN")}
                    readOnly
                    _readOnly={{ bg: "gray.100" }}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Tên</FormLabel>
                  <Input
                    value={order.name}
                    readOnly
                    _readOnly={{ bg: "gray.100" }}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Số điện thoại</FormLabel>
                  <Input
                    value={order.phone}
                    readOnly
                    _readOnly={{ bg: "gray.100" }}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Địa chỉ giao hàng</FormLabel>
                  <Input
                    value={order.shipAddress}
                    readOnly
                    _readOnly={{ bg: "gray.100" }}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    value={order.email}
                    readOnly
                    _readOnly={{ bg: "gray.100" }}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Thành tiền</FormLabel>
                  <Input
                    _readOnly={{ bg: "gray.100" }}
                    value={
                      order?.price ? order.price : "Chưa cập nhật giá tiền"
                    }
                    readOnly
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Ghi chú của bạn</FormLabel>
                  <Textarea
                    _readOnly={{ bg: "gray.100" }}
                    value={order.note}
                    height="150px"
                    readOnly
                  />
                </FormControl>

                <Flex columnGap={4}>
                  <Spacer />

                  <Button
                    _hover={{
                      backgroundColor: "app_black.0",
                      color: "app_white.0",
                    }}
                    px="40px"
                    py="25px"
                    bgColor="red"
                    color="app_white.0"
                    borderRadius="40px"
                    mt="40px"
                    zIndex="1"
                    type="submit"
                  >
                    Hủy
                  </Button>

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
                    type="submit"
                  >
                    Xác nhận đơn in
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Container>
      </>
    );
  }
}
