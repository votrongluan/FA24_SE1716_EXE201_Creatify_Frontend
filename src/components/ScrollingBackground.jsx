import { Box, Text } from "@chakra-ui/react";

export default function ScrollingBackground() {
  return (
    <Box>
      {/* Parallax Background */}
      <Box
        bgImage="url('https://via.placeholder.com/1920x1080')"
        h="100vh"
        bgSize="cover"
        bgAttachment="fixed"
        bgPosition="center"
        bgRepeat="no-repeat"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="4xl" color="white">
          Scroll Down to See the Effect
        </Text>
      </Box>

      {/* Additional Content */}
      <Box
        h="100vh"
        bg="gray.200"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="2xl">More Content Here</Text>
      </Box>
    </Box>
  );
}
