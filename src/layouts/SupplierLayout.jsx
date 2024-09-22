import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SupplierSideBar from "../components/SupplierSideBar";

function SupplierLayout(props) {
  return (
    <Box bg="gray.50">
      {/* sidebar */}
      <Box
        position="fixed"
        as="aside"
        bg="app_black.0"
        color="app_white.0"
        minHeight={{ lg: "100vh" }}
        minWidth="280px"
        p={{ base: "20px", lg: "30px" }}
      >
        <SupplierSideBar />
      </Box>

      {/* main content & navbar */}
      <Box
        color="app_white.0"
        minH="100svh"
        bgColor="app_grey.0"
        as="main"
        p="40px"
        ml="280px"
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default SupplierLayout;
