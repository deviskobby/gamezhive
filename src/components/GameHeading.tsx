import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const heading = `Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
