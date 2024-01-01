import React from "react";
import { Container, Flex, Box, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm";

const AuthPage = () => {
  return (
    <Flex
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      px={4}
    >
      <Container maxW={"container.md"} padding={0}>
      <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
        {/* left-hand-side-image */}
        <Box display={{ base: "none", md: "block" }}>
          <Image src="/auth.png" h={600} alt="Auth.logo" />
        </Box>
        {/* Right-hand-side */}
        <VStack>
          <AuthForm />
          <Box textAlign={"center"}>Get the App.</Box>
          <Flex gap={5} justifyContent={"center"}>
            <Image src="/playstore.png" h={"10"} alt="playstore logo" />
            <Image src="/microsoft.png" h={"10"} alt="microsoft logo" />
          </Flex>
        </VStack>
      </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
