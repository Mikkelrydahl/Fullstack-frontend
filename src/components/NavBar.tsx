import { Grid, GridItem, Spacer, Stack, Button } from "@chakra-ui/react";
import NavButton from "./NavButton";

function NavBar() {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={"80px 1fr 30px"}
      gridTemplateColumns={"170px 1fr"}
      h="1350px"
      gap="0.5"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="blue.900" area={"header"}>
        <Stack direction="row" spacing={1}>
          <NavButton name="Home" to="/Home" />
          <NavButton name="Film" to="/" />
          <NavButton name="TV-Serier" to="/" />
          <Spacer />
          <NavButton name="Personer" to="/" />
          <NavButton name="Mere" to="/" />
        </Stack>
      </GridItem>
     
    </Grid>
  );
}

export default NavBar;
