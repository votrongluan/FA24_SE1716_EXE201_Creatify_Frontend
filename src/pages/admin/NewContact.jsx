import {
  Box,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  GridItem,
  Select,
} from "@chakra-ui/react";

const optionStyle = {
  backgroundColor: "#00060F",
  color: "white",
};

export default function NewContact() {
  const contactData = [
    {
      label: "Nguồn ngoại tuyến",
      value: "1,506",
      change: "▲ 241%",
      changeColor: "green.500",
    },
    {
      label: "Lưu lượng truy cập trực tiếp",
      value: "21",
      change: "▼ 25%",
      changeColor: "red.500",
    },
    {
      label: "Tìm kiếm tự nhiên",
      value: "9",
      change: "▼ 31%",
      changeColor: "red.500",
    },
    {
      label: "Chiến dịch khác",
      value: "8",
      change: "▲ 33%",
      changeColor: "green.500",
    },
    { label: "Giới thiệu", value: "4", change: "0%", changeColor: "gray.400" },
  ];

  return (
    <>
      {/* New Contacts by Source */}
      <GridItem
        color="app_black.0"
        bgColor="app_white.0"
        border="1px solid black"
        p="12px"
      >
        <Box w="100%">
          <Flex alignItems="center" justifyContent="space-between">
            <Heading fontWeight="normal" fontSize="18px" color="app_black.0">
              Liên hệ mới theo nguồn
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
              <option style={optionStyle}>30 ngày qua</option>
            </Select>
          </Flex>

          <Table mt="20px" variant="simple">
            <Thead>
              <Tr>
                <Th color="gray.400">Nguồn</Th>
                <Th color="gray.400">30 ngày qua</Th>
                <Th color="gray.400">▲</Th>
              </Tr>
            </Thead>
            <Tbody>
              {contactData.map((item, index) => (
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
