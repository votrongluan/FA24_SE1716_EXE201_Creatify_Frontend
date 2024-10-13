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
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import axios, { appURL } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import {
  orderStatusColorMap,
  orderStatusMap,
  printOrderStatusColorMap,
  printOrderStatusMap,
} from "../../data/globalData";
import { GlobalContext } from "../../context/GlobalContext";

export default function PrintOrderDetailPage() {
  const [isNewPaymentLoading, setIsNewPaymentLoading] = useState(false);
  const { id } = useParams();
  const toast = useToast();
  const { auth } = useAuth();
  const [paymentDetail, setPaymentDetail] = useState(null);
  const [order, setOrder] = useState(null);
  const { orderId, incrementOrderId } = useContext(GlobalContext);
  let payOSLink = "https://pay.payos.vn/web/";

  function refreshPayment() {
    if (!order?.price || order?.status == 4 || order?.status == 1) {
      toast({
        title: "Đơn in chưa được cập nhật giá",
        description: "Số tiền không hợp lệ",
        status: "info",
        duration: 2000,
        isClosable: true,
      });

      return;
    }

    setIsNewPaymentLoading(true);

    const paymentData = {
      orderId: orderId.toString(),
      description: `Thanh toan ma don ${id}`,
      priceTotal: order.price,
      returnUrl: `${appURL}/order/${id}`,
      cancelUrl: `${appURL}/order/${id}`,
      items: [
        {
          productName: `Ma don in ${id}`,
          quantity: 1,
          priceSingle: order.price,
        },
      ],
    };

    axios
      .post("/Payment/CreatePayment", paymentData, {
        headers: {
          "Content-Type": "application/json", // Explicitly set the content type
        },
      })
      .then((response) => {
        axios
          .put(`/PrintOrder/UpdatePayOsOrderId?printOrderId=${id}`, {
            payOsOrderId: orderId,
          })
          .then((response) => {
            incrementOrderId();
            setIsNewPaymentLoading(false);
            fetchProductOrders();
          })
          .catch((error) => {
            console.error("Error placing order", error);
          });
      })
      .catch((error) => {
        console.error("Error placing order", error);
      });
  }

  function fetchProductOrders() {
    axios
      .get(`/PrintOrder/GetAllPrintOrders`)
      .then((response) => {
        const data = response.data;
        const tmpOrder = data.find(
          (item) =>
            item.printOrderId == id && item.customerId == auth.EmployeeId
        );
        setOrder(tmpOrder);

        axios
          .get(`/Payment/GetOrder/${tmpOrder.payOsOrderId}`)
          .then((response) => {
            const data = response.data;
            setPaymentDetail(data);

            if (data.status == "PAID") {
              axios.put(`/Order/UpdatePayStatus?orderId=${id}`);
            }
          })
          .catch((error) => {
            console.log(error);
          });
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
            <Flex wrap="wrap" spacing={8}>
              <Box flex="1" boxShadow="sm" p={8}>
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

                <FormControl mt={4}>
                  <FormLabel>Thành tiền</FormLabel>
                  <Input
                    _readOnly={{ bg: "gray.100" }}
                    value={
                      order?.price
                        ? order.price.toLocaleString() + " đ"
                        : "Chưa cập nhật giá tiền"
                    }
                    readOnly
                    fontWeight="bold"
                  />
                </FormControl>

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

                  {[0, 1].includes(order?.status) && (
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
                      onClick={() => {
                        axios
                          .put(
                            `/PrintOrder/UpdatePrintOrderStatus?printOrderId=${order.printOrderId}`,
                            {
                              status: 4,
                              price: order?.price,
                              supplierId: order?.supplierId,
                            }
                          )
                          .then((response) => {
                            toast({
                              title: `${order.printOrderId} đã cập nhật thành công`,
                              status: "success",
                              duration: 500,
                              isClosable: true,
                            });

                            fetchProductOrders();
                          })
                          .catch((error) => {
                            console.error("Error placing order", error);
                          });
                      }}
                    >
                      Hủy đơn in
                    </Button>
                  )}

                  {order?.status == 1 && (
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
                      onClick={() => {
                        axios
                          .put(
                            `/PrintOrder/UpdatePrintOrderStatus?printOrderId=${order.printOrderId}`,
                            {
                              status: 2,
                              price: order?.price,
                              supplierId: order?.supplierId,
                            }
                          )
                          .then((response) => {
                            toast({
                              title: `${order.printOrderId} đã cập nhật thành công`,
                              status: "success",
                              duration: 500,
                              isClosable: true,
                            });

                            fetchProductOrders();
                          })
                          .catch((error) => {
                            console.error("Error placing order", error);
                          });
                      }}
                    >
                      Xác nhận đơn in
                    </Button>
                  )}
                </Flex>
              </Box>

              <Box flex="2">
                {!isNewPaymentLoading ? (
                  <Box boxShadow="sm" p={8}>
                    <Heading as="h2" size="sm" textAlign="center" mb={4}>
                      Thông tin thanh toán
                    </Heading>

                    <Text mt={4}>
                      Tình trạng thanh toán:{" "}
                      {paymentDetail?.status || "Chưa có thông tin"}
                    </Text>
                    <Text mt={4}>
                      Số tiền thanh toán:{" "}
                      {paymentDetail?.amount.toLocaleString() ||
                        "Chưa có thông tin"}{" "}
                      đ
                    </Text>
                    <Text mt={4}>
                      Link thanh toán:{" "}
                      <Link
                        href={payOSLink + paymentDetail?.id}
                        color="teal.500"
                      >
                        {payOSLink + paymentDetail?.id}
                      </Link>
                    </Text>
                    <Text mt={4}>
                      Ngày tạo:{" "}
                      {new Date(paymentDetail?.createdAt).toLocaleString(
                        "vi-VN"
                      )}
                    </Text>
                    <Text mt={4}>
                      Ngày thanh toán:{" "}
                      {paymentDetail?.transactions.length != 0
                        ? new Date(
                            paymentDetail?.transactions[0].transactionDateTime
                          ).toLocaleString("vi-VN")
                        : "Chưa thanh toán"}
                    </Text>
                    {paymentDetail?.status != "PAID" && (
                      <Text
                        onClick={refreshPayment}
                        cursor={"pointer"}
                        color="teal.500"
                        mt={4}
                      >
                        Tạo mới thanh toán
                      </Text>
                    )}
                  </Box>
                ) : (
                  <Spinner />
                )}
              </Box>
            </Flex>
          </Box>
        </Container>
      </>
    );
  }
}
