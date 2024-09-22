import { List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import BrandLogo from "./BrandLogo.jsx";

export default function SupplierSideBar() {
  const { auth } = useAuth();
  const navLinkStyle = ({ isActive }) => {
    return {
      display: "block",
      color: isActive ? "#3A6AFD" : null,
      paddingTop: "20px",
      paddingBottom: "20px",
    };
  };

  return (
    <>
      <BrandLogo />

      <List mt="20px" fontSize="1.2em">
        <ListItem
          transition="margin ease 0.3s"
          _hover={{
            color: "app_blue.0",
            ml: "8px",
          }}
        >
          <NavLink style={navLinkStyle} to={`task`}>
            Tất cả đơn hàng
          </NavLink>
        </ListItem>

        <ListItem
          transition="margin ease 0.3s"
          _hover={{
            color: "app_blue.0",
            ml: "8px",
          }}
        >
          <NavLink style={navLinkStyle} to={`own`}>
            Đơn hàng đã nhận
          </NavLink>
        </ListItem>

        <ListItem
          transition="margin ease 0.3s"
          _hover={{
            color: "app_blue.0",
            ml: "8px",
          }}
        >
          <NavLink style={navLinkStyle} to={`/`}>
            Quay về trang chủ
          </NavLink>
        </ListItem>

        <ListItem
          transition="margin ease 0.3s"
          _hover={{
            color: "app_blue.0",
            ml: "8px",
          }}
        >
          <NavLink style={navLinkStyle} to={`/auth`}>
            Đăng xuất{" "}
          </NavLink>
        </ListItem>
      </List>
    </>
  );
}
