import { Box, Grid, GridItem, Show } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <Show above="lg">
        <h1>Side Bar</h1>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={3}>
          <h1>Main Area Header</h1>
        </Box>

        <h1>Main Games Area</h1>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
