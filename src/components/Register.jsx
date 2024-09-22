import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

export default function Register({ changeTab }) {
  const toast = useToast();
  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      // Check if password is same as rePassword
      if (data.password !== data.rePassword) {
        toast({
          title: "Đăng ký thất bại",
          description: "Mật khẩu không trùng nhau",
          status: "error",
          duration: 700,
          isClosable: true,
          position: "top-right",
        });
        return;
      }

      // Check if phone number is valid
      const phoneRegex = /^0[0-9]{9}$/;
      if (!phoneRegex.test(data.phone)) {
        console.log(data.phone);
        toast({
          title: "Đăng ký thất bại",
          description: "Số điện thoại không hợp lệ",
          status: "error",
          duration: 700,
          isClosable: true,
          position: "top-right",
        });
        return;
      }

      const res = await axios.post(
        "/employee/registercustomer",
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const user = res.data;

      if (!user) {
        toast({
          title: "Đăng ký thất bại",
          description: "Tài khoản đã tồn tại",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        toast({
          title: "Đăng ký thành công, vui lòng kích hoạt tài khoản",
          description: "Tài khoản đã được tạo",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box
        fontWeight="semibold"
        fontSize="20px"
        _selected={{ bg: "gray.100" }}
        fontFamily="Montserrat"
        mb="20px"
        pb="8px"
        borderBottom="1px solid black"
      >
        Đăng ký
      </Box>

      <Form onSubmit={handleRegister}>
        <FormControl isRequired mb="20px">
          <FormLabel>Tên của bạn</FormLabel>
          <Input bgColor="white" type="text" name="name" />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Nhập email</FormLabel>
          <Input bgColor="white" type="email" name="email" />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Nhập mật khẩu</FormLabel>
          <Input bgColor="white" type="password" name="password" />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Nhập lại mật khẩu</FormLabel>
          <Input bgColor="white" type="password" name="rePassword" />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Nhập số điện thoại</FormLabel>
          <Input bgColor="white" type="tel" name="phone" />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Nhập địa chỉ</FormLabel>
          <Input bgColor="white" type="tel" name="address" />
        </FormControl>

        <Button
          color="app_white.0"
          bgColor="app_blue.0"
          width="100%"
          type="submit"
          mt="30px"
        >
          Đăng ký
        </Button>
      </Form>

      <Flex mt="20px" justifyContent="space-between">
        <Box
          onClick={() => changeTab("login")}
          cursor="pointer"
          color="app_blue.0"
        >
          Đăng nhập
        </Box>
        <Box>
          <Text textAlign="right">
            <Link to="/verify">
              <Text color="app_blue.0">Kích hoạt tài khoản</Text>
            </Link>
          </Text>
        </Box>
      </Flex>
    </>
  );
}
