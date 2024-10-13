import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Link,
  SimpleGrid,
  Spacer,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios, { appURL } from "../../api/axios";
import RequireAuth from "../../components/RequireAuth";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function PrintOrderPage() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: auth?.EmployeeName,
    phone: auth?.Phone,
    email: auth?.Email,
    shipAddress: auth?.Address,
    fileLink: "",
    note: "",
    customerId: auth?.EmployeeId,
    supplierId: "",
    payOsOrderId: "",
    status: 0,
  });

  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/PrintOrder/AddPrintOrder", formData)
      .then((response) => {
        console.log(response.data);
        navigate(`/printorder/${response.data.data[0].printOrderId}`);
      })
      .catch((error) => {
        console.error("Error placing order", error);
      });
  };

  return (
    <RequireAuth allowedRoles={1}>
      <Container w="90%" maxW="1400px" pb="100px">
        <Box height="100px">
          <Heading
            fontWeight="normal"
            as="h2"
            fontSize="26px"
            fontFamily="Montserrat"
            textAlign="center"
          >
            Đặt in theo yêu cầu
          </Heading>
        </Box>

        <form onSubmit={handleSubmit}>
          <SimpleGrid
            columns={{
              base: 1,
              xl: 2,
            }}
          >
            <Box px="40px" bgColor="app_grey.0" color="app_white.0" py="40px">
              <Heading as="h3" fontSize="20px" mb={4}>
                Hướng dẫn khách hàng
              </Heading>
              <Box mb={4}>
                <p>
                  Máy in 3D chỉ hỗ trợ in các mô hình đơn sắc. Việc thêm màu vào
                  mô hình sẽ là công đoạn hậu kỳ. Nếu bạn có yêu cầu về màu sắc,
                  vui lòng:
                </p>
                <ul
                  style={{
                    marginLeft: "20px",
                  }}
                >
                  <li>Đưa thông tin màu vào file 3D (nếu có thể).</li>
                  <li>Cung cấp file ghi chú về màu sắc riêng.</li>
                  <li>Cung cấp ảnh và thông tin 2D của mô hình (nếu cần).</li>
                  <li>
                    Tải tất cả các file liên quan lên Google Drive hoặc các dịch
                    vụ khác và bật quyền chia sẻ cho tất cả.
                  </li>
                </ul>
                <p>
                  Sau khi gửi yêu cầu, nếu nhà cung cấp của chúng tôi có thể
                  thực hiện, bạn sẽ nhận được email xác nhận kèm giá.
                </p>

                <Text mt="40px" mb={4}>
                  Bạn có thể tìm hiểu về công nghệ 3D và tìm các file 3D có sẵn
                  thông qua đường dẫn sau:{" "}
                  <Link
                    href={`${appURL}/personalized`}
                    isExternal
                    color="teal.300"
                  >
                    Cá nhân hóa
                  </Link>
                  )
                </Text>
              </Box>
            </Box>

            <Box px="40px" bgColor="app_grey.0" color="app_white.0">
              <SimpleGrid
                mt="40px"
                columns={{
                  base: 1,
                  xl: 3,
                }}
                spacing={10}
              >
                <GridItem>
                  <FormControl isRequired>
                    <FormLabel>Tên</FormLabel>
                    <Input
                      name="name"
                      placeholder=" "
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isRequired>
                    <FormLabel>Số điện thoại</FormLabel>
                    <Input
                      name="phone"
                      placeholder=" "
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                </GridItem>
              </SimpleGrid>

              <FormControl isRequired mt="40px">
                <FormLabel>Địa chỉ giao hàng</FormLabel>
                <Input
                  name="shipAddress"
                  value={formData.shipAddress}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl isRequired mt="40px">
                <FormLabel>Đường dẫn đến thư mục</FormLabel>
                <Input
                  name="fileLink"
                  type="text"
                  value={formData.fileLink}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl isRequired mt="40px">
                <FormLabel>Ghi chú</FormLabel>
                <Textarea
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                />
              </FormControl>

              <Flex>
                <Spacer />
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
                  my="20px"
                >
                  Xác nhận
                </Button>
              </Flex>
            </Box>
          </SimpleGrid>
        </form>
      </Container>
    </RequireAuth>
  );
}
