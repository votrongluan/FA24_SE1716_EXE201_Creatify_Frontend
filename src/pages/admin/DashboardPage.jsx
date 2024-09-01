import React from "react";
import {
  Box,
  Container,
  Heading,
  Flex,
  VStack,
  HStack,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";

const DashboardPage = () => {
  const chartData = {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"],
    datasets: [
      {
        label: "Số lượng",
        backgroundColor: "#4e73df",
        borderColor: "#4e73df",
        data: [4500, 5300, 6250, 7800, 9800, 15000],
      },
    ],
  };

  return (
    <>
      <Heading as="h2" size="lg" textAlign="center">
        Bảng điều khiển
      </Heading>

      <Box mt="40px" minH="80vh">
        <Flex color="app_black.0">
          <Box flex="1">
            <Box mt={4}>
              <Flex justifyContent="space-between">
                <Box bg="white" borderRadius="md" boxShadow="sm" p={3} w="30%">
                  <Text fontSize="lg" fontWeight="semibold">
                    Tổng số tài khoản
                  </Text>
                  <Text textAlign="right">24.000 tài khoản</Text>
                </Box>
                <Box bg="white" borderRadius="md" boxShadow="sm" p={3} w="30%">
                  <Text fontSize="lg" fontWeight="semibold">
                    Số đơn hàng trong tháng
                  </Text>
                  <Text textAlign="right">123 đơn</Text>
                </Box>
                <Box bg="white" borderRadius="md" boxShadow="sm" p={3} w="30%">
                  <Text fontSize="lg" fontWeight="semibold">
                    Tổng doanh thu
                  </Text>
                  <Text textAlign="right">12.000.000 đ</Text>
                </Box>
              </Flex>
            </Box>

            <Flex mt={4} justifyContent="space-between">
              <Box bg="white" borderRadius="md" boxShadow="sm" p={4} w="49%">
                <Heading as="h3" size="md" textAlign="center">
                  Thống kê số lượng sản phẩm bán được
                </Heading>
                <Flex justifyContent="flex-end" mt={4} mb={4} columnGap={6}>
                  <FormControl>
                    <FormLabel>Ngày bắt đầu</FormLabel>
                    <Input type="date" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Ngày kết thúc</FormLabel>
                    <Input type="date" />
                  </FormControl>
                </Flex>
                <Bar data={chartData} options={{ maintainAspectRatio: true }} />
              </Box>

              <Box bg="white" borderRadius="md" boxShadow="sm" p={4} w="49%">
                <Heading as="h3" size="md" textAlign="center">
                  Thống kê số lượng tài khoản
                </Heading>
                <Flex justifyContent="flex-end" mt={4} mb={4} columnGap={6}>
                  <FormControl>
                    <FormLabel>Ngày bắt đầu</FormLabel>
                    <Input type="date" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Ngày kết thúc</FormLabel>
                    <Input type="date" />
                  </FormControl>
                </Flex>
                <Line
                  data={chartData}
                  options={{ maintainAspectRatio: true }}
                />
              </Box>
            </Flex>

            <Flex mt={4} justifyContent="space-between">
              <Box bg="white" borderRadius="md" boxShadow="sm" p={4} w="49%">
                <Heading as="h3" size="md" textAlign="center">
                  Thống kê số lượng đơn hàng
                </Heading>
                <Flex justifyContent="flex-end" mt={4} mb={4} columnGap={6}>
                  <FormControl>
                    <FormLabel>Ngày bắt đầu</FormLabel>
                    <Input type="date" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Ngày kết thúc</FormLabel>
                    <Input type="date" />
                  </FormControl>
                </Flex>
                <Bar data={chartData} options={{ maintainAspectRatio: true }} />
              </Box>
              <Box bg="white" borderRadius="md" boxShadow="sm" p={4} w="49%">
                <Heading as="h3" size="md" textAlign="center">
                  Thống kê doanh thu
                </Heading>
                <Flex justifyContent="flex-end" mt={4} mb={4} columnGap={6}>
                  <FormControl>
                    <FormLabel>Ngày bắt đầu</FormLabel>
                    <Input type="date" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Ngày kết thúc</FormLabel>
                    <Input type="date" />
                  </FormControl>
                </Flex>
                <Line
                  data={chartData}
                  options={{ maintainAspectRatio: true }}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default DashboardPage;
