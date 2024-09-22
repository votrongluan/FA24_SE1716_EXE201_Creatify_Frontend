import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { Form, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

export default function ForgetPassword({ changeTab }) {
  const toast = useToast();
  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSending, setIsSending] = useState(false); // New state for button disabling

  const from = location.state?.from?.pathname || "/";

  const handleSendOTP = async () => {
    setIsSending(true); // Disable the button when clicked
    try {
      const res = await axios.post("/Employee/ForgotPassword", { email });
      toast({
        title: "Mã xác nhận đã được gửi!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Lỗi khi gửi mã xác nhận!",
        description: err.response?.data?.message || "Vui lòng thử lại sau.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      // First, verify the OTP
      await axios.post(`/Employee/VerifyOTPForgotPassword?email=${email}`, {
        otp,
      });

      // Then, reset the password
      await axios.post(`/Employee/ResetPassword?email=${email}`, {
        newPassword,
        confirmPassword,
      });

      toast({
        title: "Mật khẩu đã được thay đổi!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Lỗi khi đổi mật khẩu!",
        description: err.response?.data?.message || "Vui lòng thử lại sau.",
        status: "error",
        duration: 3000,
        isClosable: true,
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
        Quên mật khẩu
      </Box>

      <Form onSubmit={handleChangePassword}>
        <FormControl isRequired mb="20px">
          <FormLabel>Email</FormLabel>
          <Input
            bgColor="white"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormHelperText>
            Hệ thống sẽ gửi mã OTP về mail của bạn
          </FormHelperText>
          <Flex>
            <Spacer />
            <Button
              mt={2}
              color="app_white.0"
              bgColor="app_blue.0"
              width="50%"
              onClick={handleSendOTP}
              isLoading={isSending} // Show loading spinner if sending
              isDisabled={isSending} // Disable button if sending
            >
              Gửi mã xác nhận
            </Button>
          </Flex>
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Mã OTP</FormLabel>
          <Input
            bgColor="white"
            type="text"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Mật khẩu mới</FormLabel>
          <Input
            bgColor="white"
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired mb="20px">
          <FormLabel>Xác nhận mật khẩu</FormLabel>
          <Input
            bgColor="white"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>

        <Button
          color="app_white.0"
          bgColor="app_blue.0"
          width="100%"
          type="submit"
          mt="30px"
        >
          Xác nhận
        </Button>

        <Flex mt="20px" justifyContent="space-between">
          <Spacer />

          <Box
            onClick={() => changeTab("login")}
            cursor="pointer"
            color="app_blue.0"
          >
            Đăng nhập
          </Box>
        </Flex>
      </Form>
    </>
  );
}
