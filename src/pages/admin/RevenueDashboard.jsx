import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Select,
} from "@chakra-ui/react";
import { Line } from "react-chartjs-2";

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

const statsData = {
  totalOrders: {
    label: "Tổng số đơn hàng",
    value: "70%",
    change: 20,
    comparison: "50%",
    direction: "up",
  },
  totalPrints: {
    label: "Tổng số đơn in",
    value: 136,
    change: -5,
    comparison: 143,
    direction: "down",
  },
  totalRevenue: {
    label: "Số sản phẩm bán được",
    value: "41,710,000 VND",
    change: -12,
    comparison: "47,500,000 VND",
    direction: "down",
  },
  targetCompletion: {
    label: "Hoàn thành mục tiêu",
    value: "70%",
    change: 20,
    comparison: "50%",
    direction: "up",
  },
  newCustomers: {
    label: "Khách hàng mới",
    value: 136,
    change: -5,
    comparison: 143,
    direction: "down",
  },
  emailRevenue: {
    label: "Doanh thu qua email",
    value: "41,710,000 VND",
    change: -12,
    comparison: "47,500,000 VND",
    direction: "down",
  },
  revenue: {
    label: "DOANH THU",
    value: "124,110,000 VND",
    change: 15,
    comparison: "107,000,000 VND",
    direction: "up",
  },
  profit: {
    label: "LỢI NHUẬN",
    value: "30,550,000 VND",
    change: -8,
    comparison: "33,000,000 VND",
    direction: "down",
  },
};

function renderStat(stat) {
  return (
    <>
      <Flex mb="8px" alignItems="center" justifyContent="space-between">
        <Heading fontWeight="normal" fontSize="18px" color="app_black.0">
          {stat.label}
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
        <StatNumber>{stat.value}</StatNumber>
        <StatHelpText>
          <Text color={stat.direction === "down" ? "red.500" : "green.500"}>
            {stat.direction === "down" ? "▼" : "▲"} {Math.abs(stat.change)}% (
            Kỳ trước: {stat.comparison})
          </Text>
        </StatHelpText>
      </Stat>
    </>
  );
}

const optionStyle = {
  backgroundColor: "#00060F",
  color: "white",
};

export default function RevenueDashboard() {
  return (
    <>
      <SimpleGrid mt="8px" columns={3} gap="8px">
        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          {renderStat(statsData.totalOrders)}
        </GridItem>

        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          {renderStat(statsData.totalPrints)}
        </GridItem>

        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          {renderStat(statsData.totalRevenue)}
        </GridItem>
      </SimpleGrid>

      <SimpleGrid mt="8px" columns={3} gap="8px">
        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          {renderStat(statsData.targetCompletion)}
        </GridItem>

        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          {renderStat(statsData.newCustomers)}
        </GridItem>

        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          {renderStat(statsData.emailRevenue)}
        </GridItem>
      </SimpleGrid>

      <SimpleGrid mt="8px" columns={2} gap="8px">
        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          {renderStat(statsData.revenue)}
          <Line data={revenueData} />
        </GridItem>

        <GridItem bgColor="app_white.0" border="1px solid black" p="12px">
          {renderStat(statsData.profit)}
          <Line data={profitData} />
        </GridItem>
      </SimpleGrid>
    </>
  );
}
