import "./videoCarousel.scss";
import { Carousel } from "react-bootstrap";
import video1 from "../../assests/video7.mp4";
import video2 from "../../assests/video8.mp4";
import video3 from "../../assests/video9.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";

const VideoCarousel = () => {
  const videoProperties = [
    {
      id: 1,
      video: video1,
    },
    {
      id: 2,
      video: video2,
    },
    {
      id: 3,
      video: video3,
    },
  ];
  return (
    <div className="carousel">
      <Carousel>
        {videoProperties.map((item) => (
          <Carousel.Item key={item.id}>
            <ReactPlayer
              className="video"
              url={"https://www.youtube.com/watch?v=-4fyyyQjsz8"}
              playing={true}
              loop={true}
              muted={true}
              width="100%"
              height="100%"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
