import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" py="80px" px="80px" bg="app_grey.0" color="white">
      <Flex
        direction={{ base: "column", xl: "row" }} // Responsive direction
        alignItems={{ base: "center", xl: "flex-start" }} // Center align items on small screens
        textAlign={{ base: "center", xl: "left" }} // Center text on small screens
      >
        <Box mb={{ base: "40px", xl: "0" }}>
          <Text
            fontFamily="Montserrat"
            fontSize="16px"
            color="app_white.0"
            fontWeight="bold"
          >
            Địa chỉ
          </Text>
          <Text mt="20px" fontSize="16px" color="app_grey.1">
            Đại học FPT
          </Text>
          <Text mt="10px" fontSize="16px" color="app_grey.1">
            3d.creatifyteam6@gmail.com
          </Text>
          <Text mt="10px" fontSize="16px" color="app_grey.1">
            099.9999.999
          </Text>
          <Button
            _hover={{
              color: "app_black.0",
              backgroundColor: "app_white.0",
            }}
            px="40px"
            bgColor="app_blue.0"
            color="app_white.0"
            borderRadius="40px"
            mt="40px"
          >
            Nhận hỗ trợ
          </Button>
        </Box>

        <Box textAlign="center" flex="1" mb={{ base: "40px", xl: "0" }}>
          <Box>
            <Text
              fontFamily="Montserrat"
              fontSize="16px"
              color="app_white.0"
              fontWeight="bold"
            >
              Nhận thông tin mới từ chúng tôi
            </Text>

            <Text mt="20px" fontSize="16px" color="app_grey.1">
              Đăng ký bằng cách gửi email để nhận được những thông tin mới nhất
              từ chúng tôi
            </Text>

            <Text
              mt={{
                base: "20px",
                xl: "80px",
              }}
              fontSize="16px"
              color="app_grey.1"
            >
              Email*
              <Box mt="20px">
                <Box>
                  <Input
                    borderRadius="100px"
                    width="330px"
                    color="app_grey.1"
                    py="25px"
                  />
                  <Button
                    _hover={{
                      backgroundColor: "app_black.0",
                      color: "app_white.0",
                    }}
                    px="40px"
                    py="25px"
                    bgColor="app_white.0"
                    color="app_black.0"
                    borderRadius="40px"
                    ml="-40px"
                    zIndex="1"
                    mt="-5px"
                  >
                    Gửi ngay
                  </Button>
                </Box>
              </Box>
            </Text>
          </Box>
        </Box>

        <Box>
          <Text
            fontFamily="Montserrat"
            fontSize="16px"
            color="app_white.0"
            fontWeight="bold"
          >
            Theo dõi chúng tôi
          </Text>
          <Text mt="20px" fontSize="16px" color="app_grey.1">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61566307373631&locale=vi_VN"
            >
              Facebook
            </a>
          </Text>
          <Text mt="10px" fontSize="16px" color="app_grey.1">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/3d_creatify?igsh=Z255bXFnaXllNnJp"
            >
              Instagram
            </a>
          </Text>
        </Box>
      </Flex>

      <Text color="app_grey.1" mt="80px">
        © 2024 by Creatify
      </Text>
    </Box>
  );
}

export default Footer;
