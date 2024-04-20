import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
