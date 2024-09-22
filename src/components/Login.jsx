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
import { Form, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import { jwtDecode } from "jwt-decode";

export default function Login({ changeTab }) {
  const toast = useToast();
  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      const res = await axios.post(
        `/authorize/login?email=${data.email}&password=${data.password}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      let user = res.data;
      user.token = user.accessTokenToken;

      // Assuming the accessToken is part of the user object
      const decodedToken = jwtDecode(user.accessTokenToken);

      // Add decoded token to user object while keeping old properties
      user = { ...user, ...decodedToken };

      switch (user.role) {
        case 1:
          setAuth(user);
          navigate(from);
          break;
        default:
          setAuth(user);
          navigate(from);
          break;
      }
    } catch (err) {
      toast({
        title: "Đăng nhập thất bại",
        status: "error",
        colorScheme: "red",
        duration: 660,
      });
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
        Đăng nhập
      </Box>

      <Form onSubmit={handleLogin}>
        <FormControl isRequired mb="20px">
          <FormLabel>Email</FormLabel>
          <Input bgColor="white" type="text" name="email" />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Mật khẩu</FormLabel>
          <Input bgColor="white" type="password" name="password" />
        </FormControl>

        <Button
          color="app_white.0"
          bgColor="app_blue.0"
          width="100%"
          type="submit"
          mt="30px"
        >
          Đăng nhập
        </Button>
      </Form>

      <Flex mt="20px" justifyContent="space-between">
        <Box
          onClick={() => changeTab("forgetPassword")}
          cursor="pointer"
          color="app_blue.0"
        >
          Quên mật khẩu
        </Box>
        <Box
          onClick={() => changeTab("register")}
          cursor="pointer"
          color="app_blue.0"
        >
          Đăng ký
        </Box>
      </Flex>
    </>
  );
}
