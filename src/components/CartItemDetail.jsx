import {
  Flex,
  IconButton,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Add, Delete, Remove } from "@mui/icons-material";

export default function CartItemDetail() {
  return (
    <>
      <Flex
        flexDirection={{
          base: "column",
          sm: "row",
        }}
        borderBottom="1px solid rgba(256,256,256,0.4)"
        py="20px"
      >
        <Image
          src="https://designshack.net/wp-content/uploads/placeholder-image.png"
          w="100px"
          h="150px"
          objectFit="cover"
          objectPosition="center"
        />

        <VStack fontSize="16px" ml="20px">
          <Text fontSize="16px">Black Goku</Text>
          <Text fontSize="16px">2.200.000đ</Text>
        </VStack>

        <Spacer />

        <Flex
          flexDirection={{
            base: "column",
            xl: "row",
          }}
          columnGap="40px"
          rowGap="20px"
          height="fit-content"
          alignItems="center"
        >
          <Flex
            alignItems="center"
            height="fit-content"
            border="solid 1px white"
          >
            <IconButton
              p={5}
              color="app_white.0"
              icon={
                <Remove
                  sx={{
                    fontSize: "16px",
                  }}
                />
              }
              bg="transparent"
              _hover={{ color: "app_blue.0" }}
            />
            <Text px="10px">12</Text>
            <IconButton
              p={5}
              color="app_white.0"
              icon={
                <Add
                  sx={{
                    fontSize: "16px",
                  }}
                />
              }
              bg="transparent"
              _hover={{ color: "app_blue.0" }}
            />
          </Flex>

          <Text fontSize="16px">1.200.000đ</Text>

          <IconButton
            p={5}
            color="app_white.0"
            icon={
              <Delete
                sx={{
                  fontSize: "16px",
                }}
              />
            }
            bg="transparent"
            _hover={{ color: "app_blue.0" }}
          />
        </Flex>
      </Flex>
    </>
  );
}
