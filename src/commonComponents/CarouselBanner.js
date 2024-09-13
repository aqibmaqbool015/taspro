import { Carousel } from "react-bootstrap";
import Images from "../constant/images";
import "./commonComponent.css";
function CarouselBanner() {
  
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Images.Fitter} text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Images.Fitter} text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Images.Fitter} text="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBanner;
