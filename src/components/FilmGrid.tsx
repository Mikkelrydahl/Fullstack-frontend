import { Grid, GridItem, Spacer, Stack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import NavButton from "./NavButton";
import fetchAllMovies from "../GetAll/GetAll";

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
          <NavButton name="Home" to="/Home" />
          <NavButton name="Film" to="/" />
          <NavButton name="TV-Serier" to="/" />
          <Spacer />
          <NavButton name="Personer" to="/" />
          <NavButton name="Mere" to="/" />
        </Stack>
      </GridItem>
      <GridItem pl="2" bg="blackAlpha.800" area={"nav"}>
        {<Button>Fetch All Movies</Button>}
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
