import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Form, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import axios from "../../api/axios.js";
import Login from "../../components/Login.jsx";
import Register from "../../components/Register.jsx";
import ForgetPassword from "../../components/ForgetPassword.jsx";

function AuthPage() {
  const toast = useToast();
  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (auth) return <Navigate to="/" />;

  return (
    <Container maxW="1200px" as="main">
      <Box
        borderRadius="10px"
        bgColor="app_white.0"
        color="app_black.0"
        margin="0 auto"
        width={{
          base: "calc(100% - 40px)",
          xl: "55%",
        }}
      >
        <Tabs minH="60vh" p="20px" variant="enclosed" colorScheme="purple">
          <TabList>
            <Tab
              fontWeight="semibold"
              fontSize="20px"
              _selected={{ bg: "gray.100" }}
              fontFamily="Montserrat"
            >
              Đăng nhập
            </Tab>
            <Tab
              fontWeight="semibold"
              fontSize="20px"
              _selected={{ bg: "gray.100" }}
              fontFamily="Montserrat"
            >
              Tạo tài khoản
            </Tab>
            <Tab
              fontWeight="semibold"
              fontSize="20px"
              _selected={{ bg: "gray.100" }}
              fontFamily="Montserrat"
            >
              Quên mật khẩu
            </Tab>
          </TabList>

          <TabPanels py="10px">
            <TabPanel>
              <Login />
            </TabPanel>

            <TabPanel>
              <Register />
            </TabPanel>

            <TabPanel>
              <ForgetPassword />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <Box
        margin="8px auto 0"
        width={{
          base: "calc(100% - 40px)",
          xl: "50%",
        }}
      >
        <Text textAlign="right" p="16px" pb="100px">
          Bạn muốn trở thành nhà cung cấp của chúng tôi?{" "}
          <a
            style={{
              textDecoration: "underline",
            }}
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61566307373631&locale=vi_VN"
          >
            Liên hệ tại đây
          </a>
        </Text>
      </Box>
    </Container>
  );
}

export default AuthPage;
