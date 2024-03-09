import React from "react";
import { Box, Button, Center, Heading, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const bgColor = "dark.700";
  const color = useColorModeValue("black", "white");

  return (
    <Center height="100vh" bg={bgColor} color={color}>
      <Box textAlign="center">
        <Heading mb={4}>saige v0.1</Heading>
        <Button colorScheme="blue" onClick={() => navigate("/chat")}>
          Enter
        </Button>
      </Box>
    </Center>
  );
};

export default LandingPage;
