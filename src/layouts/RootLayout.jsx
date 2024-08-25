import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header.jsx";
import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer.jsx";

export default function RootLayout() {
  return (
    <Box fontFamily="Nunito Sans">
      <Header />
      <Box pt="100px" minH="100vh" bgColor="app_black.0" color="app_white.0">
        <Outlet />
      </Box>
      <Footer />
      <ScrollRestoration />
    </Box>
  );
}
