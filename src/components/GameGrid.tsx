import { SimpleGrid } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import GameCard from "./GameCard";

const GameGrid = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding={3}
    >
      <GameCardContainer>
        <GameCard />
      </GameCardContainer>
      <GameCardContainer>
        <GameCard />
      </GameCardContainer>
      <GameCardContainer>
        <GameCard />
      </GameCardContainer>
      <GameCardContainer>
        <GameCard />
      </GameCardContainer>
      <GameCardContainer>
        <GameCard />
      </GameCardContainer>
      <GameCardContainer>
        <GameCard />
      </GameCardContainer>
      <GameCardContainer>
        <GameCard />
      </GameCardContainer>
      <GameCardContainer>
        <GameCard />
      </GameCardContainer>
    </SimpleGrid>
  );
};

export default GameGrid;
