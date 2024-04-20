import Genre from "./Genre";
import Platform from "./Platform";





export default interface Game {
    id: number;
    name: string;
    slug: string;
    genres: Genre[];
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number;
}