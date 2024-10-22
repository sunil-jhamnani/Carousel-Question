import "./styles.css";
import Carousel from "./Components/Carousel/Carousel";
import CarouselItemsContainer from "./Components/Carousel/CarouselItemsContainer";
import CarouselItem from "./Components/Carousel/CarouselItem";
import {
  CarouselActions,
  CarouselLeftIcon,
  CarouselRightIcon,
} from "./Components/Carousel/CaourselActions";

const movies = [
  {
    title: "The Shawshank Redemption",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
  },
  {
    title: "Avatar",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
  },
  {
    title: "Transformer",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
  },
  {
    title: "Bumblebee",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
  },
  {
    title: "The Dark Knight",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
  },
];
export default function App() {
  return (
    <div className="App">
      <h1>Welcome to Carousel!</h1>
      <div>Component: Carousel</div>
      <br />
      <Carousel>
        <CarouselItemsContainer>
          <CarouselItem>
            <img alt={movies[0].title} src={movies[0].image} />
          </CarouselItem>
          <CarouselItem>
            <img alt={movies[1].title} src={movies[1].image} />
          </CarouselItem>
          <CarouselItem>
            <img alt={movies[2].title} src={movies[2].image} />
          </CarouselItem>
          <CarouselItem>
            <img alt={movies[3].title} src={movies[3].image} />
          </CarouselItem>
          <CarouselItem>
            <img alt={movies[4].title} src={movies[4].image} />
          </CarouselItem>
        </CarouselItemsContainer>
        <CarouselActions>
          <CarouselLeftIcon>{"<"}</CarouselLeftIcon>
          <CarouselRightIcon>{">"}</CarouselRightIcon>
        </CarouselActions>
      </Carousel>
    </div>
  );
}
