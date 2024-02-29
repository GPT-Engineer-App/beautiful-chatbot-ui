import React, { useState } from "react";
import { ChakraProvider, Box, VStack, HStack, Input, useColorMode, useColorModeValue, Text, IconButton, extendTheme } from "@chakra-ui/react";
import { FaMoon, FaSun, FaPaperPlane } from "react-icons/fa";

// Extend the theme to include custom colors, fonts, etc.
const theme = extendTheme({
  colors: {
    dark: {
      700: "#1A202C", // Example dark grey background
    },
    green: {
      500: "#48BB78", // Example light green accent for buttons
    },
  },
});

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "dark.700");
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
      <Box bg={bg} color={color} minH="100vh" p={4}>
        <VStack spacing={4}>
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} size="lg" alignSelf="flex-end" onClick={toggleColorMode} bg={useColorModeValue("green.500", "gray.600")} color="white" />
          <VStack spacing={4} w="full" maxW="md" mx="auto" bg={useColorModeValue("gray.100", "gray.700")} p={4} borderRadius="md" boxShadow="md">
            {messages.map((msg, index) => (
              <Box key={index} p={3} bg="green.500" borderRadius="md" alignSelf="flex-end">
                <Text>{msg}</Text>
              </Box>
            ))}
          </VStack>
          <HStack w="full" maxW="md" mx="auto">
            <Input placeholder="Type a message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === "Enter" && sendMessage()} />
            <IconButton icon={<FaPaperPlane />} isRound={true} onClick={sendMessage} bg="green.500" color="white" />
          </HStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
