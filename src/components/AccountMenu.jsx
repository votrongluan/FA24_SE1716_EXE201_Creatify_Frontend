import {
  Avatar,
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
import { Link } from "react-router-dom";
import Cart from "./Cart.jsx";
import { AccountCircleRounded } from "@mui/icons-material";

export default function AccountMenu() {
  const { auth, setAuth } = useAuth();

  return (
    <>
      {auth?.username ? (
        <Menu>
          <MenuButton as={Button}>
            <HStack>
              <Avatar src={auth?.avatarLink} size="sm" />
              <Text>{auth.username}</Text>
            </HStack>
          </MenuButton>
          <MenuList>
            <Link to={`/users/${auth?.id}`}>
              <MenuItem>Tài khoản của tôi</MenuItem>
            </Link>
            {auth?.role === "CUSTOMER" ? (
              <Link to={`/history/${auth?.id}`}>
                <MenuItem>Lịch sử đặt bàn</MenuItem>
              </Link>
            ) : null}
            <MenuItem onClick={() => setAuth(null)}>Đăng xuất</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Flex alignItems="center" columnGap="20px">
          <Cart />
          <Link to="auth">
            <Flex fontSize="18px" alignItems="center" columnGap={3}>
              <AccountCircleRounded sx={{ fontSize: "30px" }} />
              <Text transition="opacity 0.3s ease" _hover={{ opacity: ".66" }}>
                Đăng nhập
              </Text>
            </Flex>
          </Link>
        </Flex>
      )}
    </>
  );
}
