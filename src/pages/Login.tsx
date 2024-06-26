import {
  Input,
  Box,
  Heading,
  FormLabel,
  Stack,
  Button,
} from "@chakra-ui/react";

function Login() {
  return (
    <Box
      maxW="sm"
      mx="auto"
      mt={60}
      p={6}
      boxShadow="md"
      borderRadius="md"
      bg="white"
    >
      <Heading mb={6}>Login</Heading>
      <Stack spacing={3}>
        <FormLabel> Email </FormLabel>
        <Input placeholder="" />

        <FormLabel> Password </FormLabel>
        <Input placeholder="" />

        <Button type="submit" colorScheme="teal">
          Login
        </Button>
      </Stack>
    </Box>
  );
}

export default Login;
