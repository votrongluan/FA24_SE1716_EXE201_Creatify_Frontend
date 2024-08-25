import {
  Box,
  Container,
  Flex,
  GridItem,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import pla from "/public/assets/images/pla.webp";
import { Attachment, FacebookSharp, LinkedIn, X } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import Post from "../../components/Post";

export default function PostPage() {
  const toast = useToast();

  const shareToFacebook = () => {
    const url = window.location.href;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareToTwitter = () => {
    const url = window.location.href;
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareToLinkedIn = () => {
    const url = window.location.href;
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  };

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      toast({
        title: "Đã sao chép vào bộ nhớ tạm",
        status: "success",
        colorScheme: "blue",
        duration: 660,
      });
    });
  };

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

        <Box py="100px" bgColor="app_grey.0">
          <Box px="20%">
            <Text fontSize="12px">12 tháng 7</Text>

            <Text
              fontSize="40px"
              fontWeight="semi-bold"
              fontFamily="Montserrat"
              mt="40px"
            >
              Thông báo thêm sản phẩm vào trang chủ của chúng tôi
            </Text>

            <Image mt="80px" src={pla} w="100%" />

            <Text fontSize="18px" mt="40px" textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              vitae officiis odio, harum voluptate iure, esse expedita aliquam
              quia veritatis eveniet ea voluptates facilis id natus. Nulla sit
              deserunt ut? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptatem repellendus dolor possimus, illum accusantium
              quis? Quia, in quod delectus aliquam debitis a nulla magni minima
              vitae voluptatem necessitatibus, sit neque. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptate hic veritatis fugiat
              alias quasi magnam incidunt sed sapiente at, maxime animi soluta?
              Atque, libero. Provident eius reprehenderit nam libero facere.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus et
              dolor voluptatum expedita omnis. Officiis sunt repellat at
              laboriosam alias ad debitis nostrum culpa deleniti? Corrupti nemo
              consectetur incidunt quo. Quisquam cupiditate ab reiciendis dicta
              nihil error expedita asperiores ex ea doloribus consequatur,
              maxime dolorum voluptate earum, ullam veniam? Quis sapiente
              voluptates dolorum magni vel illo aut deleniti, sit nihil?
              Mollitia fugiat numquam tempore, nostrum recusandae tenetur.
              Aliquid nam officiis ex sint corporis autem in deserunt animi id
              reiciendis, exercitationem eum magni rem nihil blanditiis maxime
              ipsa laudantium culpa? Quis. Amet tempore totam id dicta corporis
              esse laborum consequatur illum itaque voluptatem dolores quis,
              adipisci vero, a, accusantium temporibus et in ut autem similique
              quasi aliquam quos repellat excepturi? Laudantium.
            </Text>

            <Box
              borderTop="1px solid"
              borderTopColor="app_white.0"
              borderBottom="1px solid"
              borderBottomColor="app_white.0"
              opacity=".5"
              mt="40px"
              pb="20px"
              display="flex"
              justifyContent="space-around"
              pt="20px"
            >
              <IconButton
                p={5}
                color="app_white.0"
                aria-label="Share on Facebook"
                icon={
                  <FacebookSharp
                    sx={{
                      fontSize: "30px",
                    }}
                  />
                }
                onClick={shareToFacebook}
                bg="transparent"
                _hover={{ color: "app_blue.0" }}
              />
              <IconButton
                p={5}
                color="app_white.0"
                aria-label="Share on Twitter"
                icon={
                  <X
                    sx={{
                      fontSize: "30px",
                    }}
                  />
                }
                onClick={shareToTwitter}
                bg="transparent"
                _hover={{ color: "app_blue.0" }}
              />
              <IconButton
                p={5}
                color="app_white.0"
                aria-label="Share on LinkedIn"
                icon={
                  <LinkedIn
                    sx={{
                      fontSize: "30px",
                    }}
                  />
                }
                onClick={shareToLinkedIn}
                bg="transparent"
                _hover={{ color: "app_blue.0" }}
              />
              <IconButton
                p={5}
                color="app_white.0"
                aria-label="Copy URL"
                icon={
                  <Attachment
                    sx={{
                      fontSize: "30px",
                    }}
                  />
                }
                onClick={copyToClipboard}
                bg="transparent"
                _hover={{ color: "app_blue.0" }}
              />
            </Box>
          </Box>

          <Box px="15%" mt="80px">
            <Flex justifyContent="space-between">
              <Text fontSize="18px">Bài đăng gần đây</Text>
              <RouterLink to="/forum">
                <Text
                  transition="opacity 0.3s ease"
                  fontSize="14px"
                  _hover={{
                    opacity: ".5",
                  }}
                >
                  Xem tất cả
                </Text>
              </RouterLink>
            </Flex>

            <SimpleGrid
              mt="40px"
              spacing={5}
              columns={{
                base: 1,
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
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
