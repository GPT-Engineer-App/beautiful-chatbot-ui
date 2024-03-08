import React, { useState } from "react";
import { ChakraProvider, Box, VStack, HStack, Input, useColorMode, useColorModeValue, Text, IconButton, extendTheme } from "@chakra-ui/react";
import { FaMoon, FaSun, FaPaperPlane } from "react-icons/fa";

// Extend the theme to include custom colors, fonts, etc.
const theme = extendTheme({
  colors: {
    dark: {
      700: "#1A202C",
    },
    green: {
      500: "#48BB78",
    },
  },
  config: {
    useSystemColorMode: true,
  },
});

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = "dark.700";
  const color = useColorModeValue("gray.800", "white");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = () => {
    if (inputValue.trim() === "") return;
    setMessages([...messages, inputValue]);
    setInputValue("");
  };

  return (
    <ChakraProvider theme={theme}>
      <Box bg={bg} color={color} minH="100vh" p={4} display="flex" flexDirection="column" alignItems="start" justifyContent="start">
        <Text fontSize="xl" p={4} textAlign="center" w="full" fontWeight="bold" color="white" alignSelf="center">
          bettr v0.1
        </Text>
        <VStack spacing={4} w="full" maxW="md" mx="auto" flexGrow={1}>
          <VStack spacing={4} w="full" minH="calc(100vh - 100px)" px={4} py={2} bg={useColorModeValue("gray.100", "gray.800")} borderRadius="md" boxShadow="md" overflowY="auto">
            {[...messages].reverse().map((msg, index) => (
              <Box key={index} p={3} bg="blue.500" borderRadius="30px" alignSelf="flex-end" color="white">
                <Text>{msg}</Text>
              </Box>
            ))}
          </VStack>

          <HStack w="full" maxW="md" mx="auto">
            <Input placeholder="Type a message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === "Enter" && sendMessage()} color="white" />
            <IconButton icon={<FaPaperPlane />} isRound={true} onClick={sendMessage} bg="blue.500" color="white" />
          </HStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
