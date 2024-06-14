import "./videoCarousel.scss";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

const VideoCarousel = () => {
  const videoProperties = [
    {
      id: 1,
      video: "https://www.youtube.com/shorts/7c8NVvDMWX8?feature=share",
    },
    {
      id: 2,
      video: "https://www.youtube.com/shorts/fV_ESJtDpr0?feature=share",
    },
    {
      id: 3,
      video: "https://www.youtube.com/shorts/_CuMUS3l4rI?feature=share",
    },
  ];

  return (
    <div className="carousel">
      <Carousel>
        {videoProperties.map((item) => (
          <Carousel.Item key={item.id}>
            <ReactPlayer
              className="video"
              url={item.video}
              playing={true}
              loop={true}
              controls
              width="100%"
              height="100%"
              muted={true}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
