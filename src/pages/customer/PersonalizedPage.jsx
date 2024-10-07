import { Button, Container, Flex } from "@chakra-ui/react";
import { STL3DEditorGuide } from "../../components/STL3DEditorGuide";

export default function PersonalizedPage({ onOpen }) {
  return (
    <>
      <Container pb="80px" w="90%" maxW="1400px" as="main" position="relative" zIndex={2}>
        <STL3DEditorGuide />
        <Flex ml="80px">
          <Button
            bgColor="app_blue.0"
            color="app_white.0"
            onClick={onOpen}
            colorScheme="blue"
            _hover={{
              color: "app_black.0",
              bgColor: "app_white.0",
            }}
          >
            Mở ứng dụng Spline
          </Button>
        </Flex>
      </Container>
    </>
  );
}
