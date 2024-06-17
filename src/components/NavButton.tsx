import { Button } from "@chakra-ui/react";

interface ButtonProps {
  name: string;
}

function NavButton({ name }: ButtonProps) {
  return <Button colorScheme="blue">{name}</Button>;
}
export default NavButton;
