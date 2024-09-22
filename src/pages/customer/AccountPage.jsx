import React from "react";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Stack,
  VStack,
  HStack,
  Divider,
  Link as ChakraLink,
  useColorModeValue,
  Flex,
  Button,
} from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function AccountPage() {
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth and redirect to login page
    setAuth(null);
    navigate("/auth");
  };

  const printOrders = [
    {
      id: 1,
      file: "abc.x",
      date: "20/06/2024",
      email: "trongluan115@gmail.com",
      phone: "0972831212",
      price: "1.200.000đ",
      status: true,
    },
    {
      id: 2,
      file: "abc.x",
      date: "20/06/2024",
      email: "trongluan115@gmail.com",
      phone: "0972831212",
      price: "1.200.000đ",
      status: false,
    },
    {
      id: 3,
      file: "abc.x",
      date: "20/06/2024",
      email: "trongluan115@gmail.com",
      phone: "0972831212",
      price: "1.200.000đ",
      status: false,
    },
  ];

  const productOrders = [
    {
      id: 1,
      products: [
        { name: "Mô hình 1", quantity: 2 },
        { name: "Mô hình 2", quantity: 4 },
      ],
      date: "20/06/2024",
      email: "trongluan115@gmail.com",
      phone: "0972831212",
      price: "1.200.000đ",
      status: true,
    },
    {
      id: 2,
      products: [
        { name: "Mô hình 1", quantity: 2 },
        { name: "Mô hình 2", quantity: 4 },
      ],
      date: "20/06/2024",
      email: "trongluan115@gmail.com",
      phone: "0972831212",
      price: "1.200.000đ",
      status: false,
    },
    {
      id: 3,
      products: [
        { name: "Mô hình 1", quantity: 2 },
        { name: "Mô hình 2", quantity: 4 },
      ],
      date: "20/06/2024",
      email: "trongluan115@gmail.com",
      phone: "0972831212",
      price: "1.200.000đ",
      status: false,
    },
  ];

  return (
    <Box minHeight="100vh" p={6}>
      <Box
        bgColor="app_white.0"
        color="app_black.0"
        borderRadius="md"
        p={4}
        maxWidth="1000px"
        mx="auto"
      >
        <Tabs variant="enclosed">
          <Flex justify="space-between" align="center" mb={4}>
            <TabList>
              <Tab>Thông tin tài khoản</Tab>
              <Tab>Lịch sử mua hàng</Tab>
              <Tab>Đơn in</Tab>
            </TabList>
            <Button onClick={handleLogout} colorScheme="red" variant="outline">
              Đăng xuất
            </Button>
          </Flex>
          <TabPanels>
            <TabPanel>
              <VStack spacing={4} align="flex-start">
                <Text fontSize="lg">Tên khách hàng: {auth?.EmployeeName}</Text>
                <Text fontSize="lg">Email: {auth?.Email}</Text>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4} align="stretch">
                {productOrders.map((order) => (
                  <Box key={order.id} borderWidth="1px" borderRadius="md" p={4}>
                    <HStack justify="space-between">
                      <Text fontWeight="bold">Order #{order.id}</Text>
                      <Text color={order.status ? "green.500" : "red.500"}>
                        {order.status ? "Hoàn thành" : "Đang xử lý"}
                      </Text>
                    </HStack>
                    <Text>Date: {order.date}</Text>
                    <Text>Price: {order.price}</Text>
                    <Divider my={2} />
                    <Text fontWeight="bold">Sản phẩm:</Text>
                    <Stack spacing={0}>
                      {order.products.map((product, index) => (
                        <Text key={index}>
                          {product.name} - Số lượng: {product.quantity}
                        </Text>
                      ))}
                    </Stack>
                  </Box>
                ))}
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4} align="stretch">
                {printOrders.map((order) => (
                  <Box key={order.id} borderWidth="1px" borderRadius="md" p={4}>
                    <HStack justify="space-between">
                      <Text fontWeight="bold">Order #{order.id}</Text>
                      <Text color={order.status ? "green.500" : "red.500"}>
                        {order.status ? "Hoàn thành" : "Đang xử lý"}
                      </Text>
                    </HStack>
                    <Text>Date: {order.date}</Text>
                    <Text>Price: {order.price}</Text>
                    <Divider my={2} />
                    <Text fontWeight="bold">
                      File: <ChakraLink color="app_blue.0">file.stl</ChakraLink>
                    </Text>
                  </Box>
                ))}
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}
