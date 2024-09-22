import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import SearchFilter from "../../components/SearchFilter.jsx";
import Pagination from "../../components/Pagination.jsx";
import ProductUpdateButton from "../../components/ProductUpdateButton.jsx";
import ProductAddButton from "../../components/ProductAddButton.jsx";
import OrderDetailButton from "../../components/OrderDetailButton.jsx";
import OrderUpdateButton from "../../components/OrderUpdateButton.jsx";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import ConfirmationDialog from "../../components/ConfirmationDialog.jsx";
import axios from "../../api/axios.js";
import PrintOrderDetailButton from "../../components/PrintOrderDetailButton.jsx";
import PrintOrderUpdateButton from "../../components/PrintOrderUpdateButton.jsx";

export default function OwnPrintOrder() {
  const orders = [
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

  return (
    <>
      <SearchFilter
        searchPlaceholder="Tìm theo tên, số điện thoại, địa chỉ"
        data={orders}
        methods={[{ value: "name", label: "Tên sản phẩm" }]}
        properties={["id"]}
        DisplayData={({ filteredData }) => (
          <Pagination
            itemsPerPage={2}
            data={filteredData}
            DisplayData={({ currentData }) => (
              <TableContainer bgColor="app_black.0" borderRadius="4px">
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Mã</Th>
                      <Th>File</Th>
                      <Th>Ngày đặt</Th>
                      <Th>Email</Th>
                      <Th>SĐT</Th>
                      <Th>Giá</Th>
                      <Th>Trạng thái</Th>
                      <Th textAlign="center">Thao tác</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {currentData.map((order) => (
                      <Tr key={order.id}>
                        <Td>
                          <Text>{order.id}</Text>
                        </Td>
                        <Td>
                          <Link
                            color="app_blue.0"
                            target="_blank"
                            href="order.file"
                          >
                            {order.file}
                          </Link>
                        </Td>
                        <Td>
                          <Text>{order.date}</Text>
                        </Td>
                        <Td>
                          <Text>{order.email}</Text>
                        </Td>
                        <Td>
                          <Text>{order.phone}</Text>
                        </Td>
                        <Td>
                          <Text>{order.price}</Text>
                        </Td>
                        <Td>
                          <Text>
                            {order.status == true ? (
                              <Badge colorScheme="green" p="8px">
                                Đã xử lý
                              </Badge>
                            ) : (
                              <Badge p="8px">Chưa xử lý</Badge>
                            )}
                          </Text>
                        </Td>
                        <Td>
                          <Flex alignItems="center" columnGap="20px">
                            <Spacer />
                            <Menu>
                              <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<HamburgerIcon />}
                                variant="outline"
                                color="app_white.0"
                              />
                              <MenuList
                                fontFamily="Nunito Sans"
                                color="app_black.0"
                                fontSize="16px"
                              >
                                <MenuItem p="0">
                                  <PrintOrderDetailButton />
                                </MenuItem>
                                <MenuItem p="0">
                                  <PrintOrderUpdateButton />
                                </MenuItem>
                              </MenuList>
                            </Menu>
                          </Flex>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            )}
          />
        )}
      />
    </>
  );
}
