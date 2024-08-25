import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import logo from "/public/assets/images/logo.svg";

export default function BrandLogo() {
  return (
    <>
      <RouterNavLink to="/">
        <Flex alignItems="center" columnGap="16px">
          <Image
            color="app_blue.0"
            backgroundColor="app_blue.0"
            src={logo}
            height="50px"
            borderRadius="50%"
          />
          <Box>
            <Heading
              letterSpacing="1px"
              fontSize="24px"
              fontFamily="Jockey One"
              as="h1"
            >
              Creatify
            </Heading>
            <Heading fontSize="14px" fontFamily="Montserrat" as="h2">
              3D Printing House
            </Heading>
          </Box>
        </Flex>
      </RouterNavLink>
    </>
  );
}
