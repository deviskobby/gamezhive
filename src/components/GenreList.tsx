import { Heading, List, ListItem } from "@chakra-ui/react";

const GenreList = () => {
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        <ListItem>Genre 1</ListItem>
        <ListItem>Genre 2</ListItem>
        <ListItem>Genre 3</ListItem>
        <ListItem>Genre 4</ListItem>
      </List>
    </>
  );
};

export default GenreList;
