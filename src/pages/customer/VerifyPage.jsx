import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

export default function VerifyPage() {
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

      const res = await axios.post(
        `/Employee/VerifyOTPCreateAccount?email=${data.email}`,
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const user = res.data;

      console.log(user);

      if (!user) {
        toast({
          title: "Thao tác thất bại",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        toast({
          title: "Kích hoạt thành công, bạn có thể đăng nhập",
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
    <Box pb="100px">
      <Box height="100px">
        <Heading
          fontWeight="normal"
          as="h2"
          fontSize="26px"
          fontFamily="Montserrat"
          textAlign="center"
        >
          Kích hoạt tài khoản
        </Heading>
      </Box>

      <Box
        p="40px"
        bgColor="app_white.0"
        color="app_black.0"
        width="40%"
        m="0 auto"
        borderRadius="10px"
      >
        <Form onSubmit={handleRegister}>
          <FormControl isRequired mb="20px">
            <FormLabel>Nhập email</FormLabel>
            <Input bgColor="white" type="email" name="email" />
          </FormControl>

          <FormControl isRequired mb="20px">
            <FormLabel>Nhập OTP</FormLabel>
            <Input bgColor="white" type="text" name="otp" />
          </FormControl>

          <Button
            color="app_white.0"
            bgColor="app_blue.0"
            width="100%"
            type="submit"
          >
            Kích hoạt
          </Button>
        </Form>

        <Box>
          <Text textAlign="right" p="16px">
            <Link
              style={{
                textDecoration: "underline",
              }}
              to="/auth"
            >
              Quay về đăng nhập
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
