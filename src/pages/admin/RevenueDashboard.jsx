import React from "react";
import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  SimpleGrid,
  GridItem,
  Select,
} from "@chakra-ui/react";
import { Line, Doughnut } from "react-chartjs-2";

// Mock data for charts and stats
const revenueData = {
  labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"],
  datasets: [
    {
      label: "Doanh thu",
      data: [300, 500, 250, 400, 200],
      borderColor: "blue",
      backgroundColor: "rgba(0, 0, 255, 0.2)",
    },
  ],
};

const profitData = {
  labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"],
  datasets: [
    {
      label: "Lợi nhuận",
      data: [100, 200, 150, 180, 130],
      borderColor: "green",
      backgroundColor: "rgba(0, 255, 0, 0.2)",
    },
  ],
};

const goalCompletionData = {
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["#FF6384", "#ccc"],
    },
  ],
};

const optionStyle = {
  backgroundColor: "#00060F",
  color: "white",
};

export default function RevenueDashboard() {
  return (
    <>
      <SimpleGrid mt="8px" columns={3} gap="8px">
        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          <Stat color="app_black.0" m="0 auto">
            <Flex alignItems="center" justifyContent="space-between">
              <StatLabel fontSize="18px">Tổng số đơn hàng</StatLabel>
              <Select
                bgColor="app_white.0"
                color="app_black.0"
                cursor="pointer"
                width="fit-content"
                fontSize="12px"
                ml="8px"
                border="none"
                outline="none"
              >
                <option style={optionStyle}>30 ngày gần nhất</option>
              </Select>
            </Flex>

            <StatNumber>70%</StatNumber>
            <StatHelpText>
              <Text color="green.500">▲ 20% (Kỳ trước: 50%)</Text>
            </StatHelpText>
          </Stat>
        </GridItem>

        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          <Stat color="app_black.0" m="0 auto">
            <Flex alignItems="center" justifyContent="space-between">
              <StatLabel fontSize="18px">Tổng số đơn in</StatLabel>
              <Select
                bgColor="app_white.0"
                color="app_black.0"
                cursor="pointer"
                width="fit-content"
                fontSize="12px"
                ml="8px"
                border="none"
                outline="none"
              >
                <option style={optionStyle}>30 ngày gần nhất</option>
              </Select>
            </Flex>

            <StatNumber>136</StatNumber>
            <StatHelpText>
              <Text color="red.500">▼ 5% (Kỳ trước: 143)</Text>
            </StatHelpText>
          </Stat>
        </GridItem>

        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          <Stat color="app_black.0" m="0 auto">
            <Flex alignItems="center" justifyContent="space-between">
              <StatLabel fontSize="18px">Số sản phẩm bán được</StatLabel>
              <Select
                bgColor="app_white.0"
                color="app_black.0"
                cursor="pointer"
                width="fit-content"
                fontSize="12px"
                ml="8px"
                border="none"
                outline="none"
              >
                <option style={optionStyle}>30 ngày gần nhất</option>
              </Select>
            </Flex>

            <StatNumber>41,710,000 VND</StatNumber>
            <StatHelpText>
              <Text color="red.500">▼ 12% (Kỳ trước: 47,500,000 VND)</Text>
            </StatHelpText>
          </Stat>
        </GridItem>
      </SimpleGrid>

      <SimpleGrid mt="8px" columns={3} gap="8px">
        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          <Stat color="app_black.0" m="0 auto">
            <Flex alignItems="center" justifyContent="space-between">
              <StatLabel fontSize="18px">Hoàn thành mục tiêu</StatLabel>
              <Select
                bgColor="app_white.0"
                color="app_black.0"
                cursor="pointer"
                width="fit-content"
                fontSize="12px"
                ml="8px"
                border="none"
                outline="none"
              >
                <option style={optionStyle}>30 ngày gần nhất</option>
              </Select>
            </Flex>

            <StatNumber>70%</StatNumber>
            <StatHelpText>
              <Text color="green.500">▲ 20% (Kỳ trước: 50%)</Text>
            </StatHelpText>
          </Stat>
        </GridItem>

        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          <Stat color="app_black.0" m="0 auto">
            <Flex alignItems="center" justifyContent="space-between">
              <StatLabel fontSize="18px">Khách hàng mới</StatLabel>
              <Select
                bgColor="app_white.0"
                color="app_black.0"
                cursor="pointer"
                width="fit-content"
                fontSize="12px"
                ml="8px"
                border="none"
                outline="none"
              >
                <option style={optionStyle}>30 ngày gần nhất</option>
              </Select>
            </Flex>

            <StatNumber>136</StatNumber>
            <StatHelpText>
              <Text color="red.500">▼ 5% (Kỳ trước: 143)</Text>
            </StatHelpText>
          </Stat>
        </GridItem>

        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          <Stat color="app_black.0" m="0 auto">
            <Flex alignItems="center" justifyContent="space-between">
              <StatLabel fontSize="18px">Doanh thu qua email</StatLabel>
              <Select
                bgColor="app_white.0"
                color="app_black.0"
                cursor="pointer"
                width="fit-content"
                fontSize="12px"
                ml="8px"
                border="none"
                outline="none"
              >
                <option style={optionStyle}>30 ngày gần nhất</option>
              </Select>
            </Flex>

            <StatNumber>41,710,000 VND</StatNumber>
            <StatHelpText>
              <Text color="red.500">▼ 12% (Kỳ trước: 47,500,000 VND)</Text>
            </StatHelpText>
          </Stat>
        </GridItem>
      </SimpleGrid>

      <SimpleGrid mt="8px" columns={2} gap="8px">
        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          <Flex mb="8px" alignItems="center" justifyContent="space-between">
            <Heading fontWeight="normal" fontSize="18px" color="app_black.0">
              DOANH THU
            </Heading>
            <Select
              bgColor="app_white.0"
              color="app_black.0"
              cursor="pointer"
              width="fit-content"
              fontSize="12px"
              ml="8px"
              border="none"
              outline="none"
            >
              <option style={optionStyle}>30 ngày gần nhất</option>
            </Select>
          </Flex>

          <Stat color="app_black.0" my="16px">
            <StatNumber>124,110,000 VND</StatNumber>
            <StatHelpText>
              <Text color="green.500">▲ 15% (Kỳ trước: 107,000,000 VND)</Text>
            </StatHelpText>
          </Stat>

          <Line data={revenueData} />
        </GridItem>

        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          <Flex mb="8px" alignItems="center" justifyContent="space-between">
            <Heading fontWeight="normal" fontSize="18px" color="app_black.0">
              LỢI NHUẬN
            </Heading>
            <Select
              bgColor="app_white.0"
              color="app_black.0"
              cursor="pointer"
              width="fit-content"
              fontSize="12px"
              ml="8px"
              border="none"
              outline="none"
            >
              <option style={optionStyle}>30 ngày gần nhất</option>
            </Select>
          </Flex>

          <Stat color="app_black.0" my="16px">
            <StatNumber>30,550,000 VND</StatNumber>
            <StatHelpText>
              <Text color="red.500">▼ 8% (Kỳ trước: 33,000,000 VND)</Text>
            </StatHelpText>
          </Stat>

          <Line data={profitData} />
        </GridItem>
      </SimpleGrid>
    </>
  );
}
