import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCard from "./GameCard";
import React from "react";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding={3}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </React.Fragment>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
