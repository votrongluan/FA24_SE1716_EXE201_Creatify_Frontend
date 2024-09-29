import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  VStack,
  Link as ChakraLink,
  useDisclosure,
  Image,
  Box,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { ShoppingCart } from "@mui/icons-material";
import { NavLink as RouterNavLink } from "react-router-dom";
import CartItem from "./CartItem";
import useCart from "../hooks/useCart";

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getCartLength } = useCart();

  return (
    <>
      <Flex
        onClick={onOpen}
        cursor="pointer"
        alignItems="center"
        position="relative"
      >
        <ShoppingCart sx={{ fontSize: "30px" }} />
        <Text
          bgColor="app_black.0"
          color="app_white.0"
          padding="3px"
          borderRadius="10px"
          fontWeight="bold"
          fontSize="12px"
          top="-5px"
          right="-10px"
          position="absolute"
        >
          {getCartLength()}
        </Text>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent
            fontFamily="Nunito Sans"
            position="relative"
            bgColor="app_grey.0"
            color="app_white.0"
          >
            <DrawerCloseButton
              p={4}
              bgColor="app_black.0"
              color="app_white.0"
            />
            <DrawerHeader
              fontFamily="Montserrat"
              color="app_black.0"
              bgColor="app_white.0"
            >
              Giỏ hàng
            </DrawerHeader>
            <DrawerBody p="20px">
              <VStack alignItems="flex-start" spacing="20px">
                <CartItem />

                <Button
                  _hover={{
                    backgroundColor: "app_black.0",
                    color: "app_white.0",
                  }}
                  px="40px"
                  py="25px"
                  bgColor="app_blue.0"
                  color="app_white.0"
                  mt="40px"
                  zIndex="1"
                  position="absolute"
                  bottom="20px"
                  left="20px"
                  right="20px"
                  as={RouterNavLink}
                  to="/cart"
                  onClick={onClose}
                >
                  Xem giỏ hàng
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
