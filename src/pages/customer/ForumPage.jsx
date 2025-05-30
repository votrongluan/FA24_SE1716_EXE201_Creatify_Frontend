import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Post from "../../components/Post";

function ForumPage() {
  return (
    <>
      <Container w="90%" maxW="1400px" pb="100px">
        <Box height="100px">
          <Heading
            fontWeight="normal"
            as="h2"
            fontSize="26px"
            fontFamily="Montserrat"
          >
            Diễn đàn
          </Heading>
        </Box>

        <Box bgColor="app_grey.0" p="100px">
          <SimpleGrid
            spacing={8}
            columns={{
              base: 1,
              lg: 2,
              xl: 3,
            }}
          >
            <GridItem>
              <Post />
            </GridItem>
            <GridItem>
              <Post />
            </GridItem>
            <GridItem>
              <Post />
            </GridItem>
            <GridItem>
              <Post />
            </GridItem>
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}

export default ForumPage;
