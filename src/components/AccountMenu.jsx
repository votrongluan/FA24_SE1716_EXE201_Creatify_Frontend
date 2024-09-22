import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth.js";
import { Link as RouterLink } from "react-router-dom";
import Cart from "./Cart.jsx";
import { AccountCircleRounded } from "@mui/icons-material";

export default function AccountMenu() {
  const { auth, setAuth } = useAuth();

  return (
    <>
      {auth?.token ? (
        <Flex alignItems="center" columnGap="20px">
          <Cart />
          <Box bgColor="app_black.0" color="app_white.0">
            <RouterLink to="/account">
              <Button>
                <HStack>
                  <Avatar src={auth?.avatarLink} size="sm" />
                  <Text>{auth.EmployeeName}</Text>
                </HStack>
              </Button>
            </RouterLink>
          </Box>
        </Flex>
      ) : (
        <Flex alignItems="center" columnGap="20px">
          <Cart />
          <RouterLink to="auth">
            <Flex fontSize="18px" alignItems="center" columnGap={3}>
              <AccountCircleRounded sx={{ fontSize: "30px" }} />
              <Text transition="opacity 0.3s ease" _hover={{ opacity: ".66" }}>
                Đăng nhập
              </Text>
            </Flex>
          </RouterLink>
        </Flex>
      )}
    </>
  );
}
