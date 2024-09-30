import React, { useState, useEffect } from "react";
import { IconButton, Tooltip, Flex } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

const ScrollToTopAndBottom = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show buttons when page is scrolled down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Flex
          direction="column"
          position="fixed"
          bottom="4"
          right="4"
          zIndex="1000"
          gap="2"
        >
          <IconButton
            icon={<ArrowUpIcon />}
            onClick={scrollToTop}
            bg="white"
            color="app_black.0"
            _hover={{ opacity: 0.5 }}
            size="lg"
            borderRadius="full"
          />

          {/* Scroll to Bottom Button */}
          <IconButton
            icon={<ArrowDownIcon />}
            onClick={scrollToBottom}
            bg="white"
            color="app_black.0"
            _hover={{ opacity: "0.5" }}
            size="lg"
            borderRadius="full"
          />
        </Flex>
      )}
    </>
  );
};

export default ScrollToTopAndBottom;
