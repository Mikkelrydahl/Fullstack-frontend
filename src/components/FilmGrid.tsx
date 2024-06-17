import { Grid, GridItem, Spacer, Stack } from "@chakra-ui/react";
import NavButton from "./NavButton";

function FilmGrid() {
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
          <NavButton name="Home" />
          <NavButton name="Film" />
          <NavButton name="TV-Serier" />
          <Spacer />
          <NavButton name="Personer" />
          <NavButton name="Mere" />
        </Stack>
      </GridItem>
      <GridItem pl="2" bg="blackAlpha.800" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" bg="blue.600" area={"main"}>
        Main
      </GridItem>
      <GridItem pl="2" bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default FilmGrid;
