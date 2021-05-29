import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeSlider = (props) => {
  let settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: true,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            aperiam rerum cum! Nam unde eaque, id dolorem ullam ab sunt.
          </h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in
            atque! Reprehenderit optio vel iure modi, maxime eveniet hic aliquid
            placeat, repellat officia quae impedit dolorum obcaecati cumque
            aperiam alias porro sapiente perferendis distinctio numquam!
          </h4>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="" />
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            aperiam rerum cum! Nam unde eaque, id dolorem ullam ab sunt.
          </h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in
            atque! Reprehenderit optio vel iure modi, maxime eveniet hic aliquid
            placeat, repellat officia quae impedit dolorum obcaecati cumque
            aperiam alias porro sapiente perferendis distinctio numquam!
          </h4>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            aperiam rerum cum! Nam unde eaque, id dolorem ullam ab sunt.
          </h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in
            atque! Reprehenderit optio vel iure modi, maxime eveniet hic aliquid
            placeat, repellat officia quae impedit dolorum obcaecati cumque
            aperiam alias porro sapiente perferendis distinctio numquam!
          </h4>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            aperiam rerum cum! Nam unde eaque, id dolorem ullam ab sunt.
          </h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, in
            atque! Reprehenderit optio vel iure modi, maxime eveniet hic aliquid
            placeat, repellat officia quae impedit dolorum obcaecati cumque
            aperiam alias porro sapiente perferendis distinctio numquam!
          </h4>
        </a>
      </Wrap>
    </Carousel>
  );
};
const Carousel = styled(Slider)`
  margin-top: 20px;
  color: white;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li buttton {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div``;
export default HomeSlider;
