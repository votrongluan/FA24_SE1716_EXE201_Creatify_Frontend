import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer.jsx";
import useAuth from "../hooks/useAuth.js";

export default function RootLayout() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  if (auth?.Role == 2) {
    navigate("/supplier");
  }

  if (auth?.Role == 3) {
    navigate("/admin");
  }

  return (
    <Box fontFamily="Nunito Sans">
      <Header />
      <Box minH="50vh" pt="100px" bgColor="app_black.0" color="app_white.0">
        <Outlet />
      </Box>
      <Footer />
      <ScrollRestoration />
    </Box>
  );
}
