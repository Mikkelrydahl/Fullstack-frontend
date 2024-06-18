import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ButtonProps {
  name: string;
  to: string;
}

function NavButton({ name, to }: ButtonProps) {
  return <Button colorScheme="blue">{name}</Button>;
}
export default NavButton;
