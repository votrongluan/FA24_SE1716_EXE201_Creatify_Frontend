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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios, { appURL } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { orderStatusColorMap, orderStatusMap } from "../../data/globalData";

export default function OrderDetailPage() {
  const { id } = useParams();
  const { auth } = useAuth();
  const [order, setOrder] = useState(null);

  function fetchProductOrders() {
    axios
      .get(`/Order/GetOrderByCustomerId?employeeId=${auth.EmployeeId}`)
      .then((response) => {
        const data = response.data;
        const tmpOrder = data.find((item) => item.orderId == id);
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
              Chi tiết đơn hàng
            </Heading>
          </Box>

          <Box borderRadius="10px" bg="white" color="app_black.0">
            <Flex wrap="wrap" spacing={8}>
              <Box flex="2">
                <Box boxShadow="sm" p={8}>
                  <Heading as="h2" size="sm" textAlign="center">
                    Thông tin đơn hàng
                  </Heading>
                  <FormControl mt={4}>
                    <FormLabel>
                      <Flex alignItems="center">
                        <Text>Mã đơn hàng </Text>
                        <Badge
                          color={orderStatusColorMap[order.orderStatus]}
                          p={2}
                          ml={2}
                        >
                          {orderStatusMap[order.orderStatus]}
                        </Badge>
                      </Flex>
                    </FormLabel>
                    <Input
                      value={order.orderId}
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Ngày đặt</FormLabel>
                    <Input
                      value={new Date(order.orderDate).toLocaleDateString(
                        "vi-VN"
                      )}
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Tên</FormLabel>
                    <Input
                      value={order.customer[0].name}
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Số điện thoại</FormLabel>
                    <Input
                      value={order.customer[0].phone}
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
                      value={order.customer[0].email}
                      readOnly
                      _readOnly={{ bg: "gray.100" }}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Thành tiền</FormLabel>
                    <Input
                      _readOnly={{ bg: "gray.100" }}
                      value={`${calculatePrice(order.orderDetail, 30000)}`}
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
                </Box>
              </Box>

              <Box flex="5">
                <Box boxShadow="sm" p={8}>
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
                      {order.orderDetail.map((order) => {
                        const product = order.products;

                        return (
                          <>
                            <Tr>
                              <Td>
                                <Link
                                  noOfLines={1}
                                  href={`${appURL}/products/${product.productId}`}
                                  isExternal
                                  color="teal.300"
                                >
                                  {product.productId}
                                </Link>
                              </Td>
                              <Td>
                                <Text noOfLines={1}>{product.name}</Text>
                              </Td>
                              <Td>
                                <Image
                                  src={product.img}
                                  alt="Product Image"
                                  w="100px"
                                  objectFit="contain"
                                />
                              </Td>
                              <Td>{product.price.toLocaleString()}</Td>
                              <Td>
                                <Flex align="center" justify="center">
                                  <Text mx={2}>{order.quantity}</Text>
                                </Flex>
                              </Td>
                              <Td textAlign="end">
                                <Text fontWeight="bold">
                                  {(
                                    order.quantity * product.price
                                  ).toLocaleString()}{" "}
                                </Text>
                              </Td>
                            </Tr>
                          </>
                        );
                      })}
                    </Tbody>
                  </Table>
                  <Text fontWeight="bold" textAlign="end" pr={4} mt={4}>
                    Thành tiền: {calculatePrice(order.orderDetail)}đ
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Container>
      </>
    );
  }
}
