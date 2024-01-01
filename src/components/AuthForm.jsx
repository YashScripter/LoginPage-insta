import {
  Box,
  Image,
  Input,
  VStack,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confrimPassword: "",
  });

  const authHandler = () => {
    if( !inputs.email || !inputs.password){
      alert('Please fill all the Details')
      return
    }
    navigate('/');
  };
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="./logo.png" h={24} cursor={"pointer"} alt="instagram" />
          <Input
            placeholder="Email"
            fontSize={14}
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input placeholder="Password"
           fontSize={14} 
           type="password"  
           value={inputs.password}
           onChange={(e)=> setInputs({...inputs,password:e.target.value})}
            />

          {!isLogin ? (
            <Input
              placeholder="ConfrimPassword"
              fontSize={14}
              type="Password"
              value={inputs.confrimPassword}
              onChange={(e)=> setInputs({...inputs,confrimPassword:e.target.value})}
            />
          ) : null}

          <Button
            w={"full"}
            fontSize={14}
            colorScheme="blue"
            size={"sm"}
            onClick={authHandler}
          >
            {isLogin ? "Log in" : "Sign Up"}
          </Button>

          {/* ------OR-------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" alt="google logo" w={5} m={2} />
            <Text color={"blue.200"}>Log in with Google</Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} padding={5} borderRadius={4}>
        <Flex alignItems={"center"} justifyContent={"center"} w={241}>
          <Box mx={1} fontSize={14}>
            {isLogin ? "Don't have an account" : "Already have an account"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.300"}
            cursor={"pointer"}
            fontSize={14}
          >
            {isLogin ? "SignUp" : "Log in "}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
