import {
  Box,
  Flex,
  GridItem,
  Heading,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function MarketingPerformance() {
  const optionStyle = {
    backgroundColor: "#00060F",
    color: "white",
  };

  const performanceData = [
    {
      label: "Lượt truy cập",
      value: "12,411",
      change: "▼ 9%",
      changeColor: "red.500",
    },
    { label: "Liên hệ", value: "44", change: "▼ 17%", changeColor: "red.500" },
    {
      label: "Khách hàng tiềm năng",
      value: "24",
      change: "▼ 25%",
      changeColor: "red.500",
    },
    {
      label: "Khách hàng",
      value: "0",
      change: "▼ 100%",
      changeColor: "red.500",
    },
    {
      label: "Tỷ lệ thoát",
      value: "1.34%",
      change: "▲ 425.72%",
      changeColor: "red.500",
    },
    {
      label: "Thời lượng phiên trung bình",
      value: "0h 1m",
      change: "▼ 32%",
      changeColor: "red.500",
    },
    {
      label: "Phiên trung bình",
      value: "4.61",
      change: "▼ 20%",
      changeColor: "red.500",
    },
    {
      label: "Lượt xem trang",
      value: "7,565",
      change: "▼ 58%",
      changeColor: "red.500",
    },
  ];

  return (
    <>
      {/* Marketing Performance */}
      <GridItem
        color="app_black.0"
        bgColor="app_white.0"
        border="1px solid black"
        p="12px"
      >
        <Box w="100%">
          <Flex alignItems="center" justifyContent="space-between">
            <Heading fontWeight="normal" fontSize="18px" color="app_black.0">
              Hiệu suất tiếp thị
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
              <option style={optionStyle}>Last 30 days</option>
            </Select>
          </Flex>

          <Table mt="20px" variant="simple" color="app_black.0">
            <Thead>
              <Tr>
                <Th color="gray.400">Chỉ số</Th>
                <Th color="gray.400">30 Ngày qua</Th>
                <Th color="gray.400">▲</Th>
              </Tr>
            </Thead>
            <Tbody>
              {performanceData.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.label}</Td>
                  <Td>{item.value}</Td>
                  <Td color={item.changeColor}>{item.change}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </GridItem>
    </>
  );
}
