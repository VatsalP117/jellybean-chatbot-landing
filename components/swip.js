import { useRef, useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import ImageCard from "./image-card";

import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation } from "swiper";
import { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);
const data = [
  {
    title: "Wine Tasting Adventures",
    body: "Indulge your team in a delightful wine tasting experience, where they can savor the finest flavors and learn about the art of winemaking. Elevate your team's camaraderie through this unique and enriching experience.",
    imgName: "wine",
  },
  {
    title: "Sushi Making Workshops",
    body: "Ignite your team's culinary creativity with our immersive sushi making workshops. Dive into the art of crafting exquisite sushi rolls, mastering the delicate techniques of rice preparation, and exploring the vibrant world of sushi ingredients",
    imgName: "sushi",
  },
  {
    title: "Virtual Reality Experiences",
    body: "From virtual escape rooms to adrenaline-pumping simulations, this cutting-edge technology fosters collaboration, communication, and shared excitement, making it a perfect choice for an unforgettable team-building experience. ",
    imgName: "vr",
  },
  {
    title: "Culinary Team Building Experiences",
    body: "Embark on a delectable journey of culinary team building, where flavors mingle and teamwork sizzles with everything from hands-on cooking challenges to tantalizing taste tests",
    imgName: "culinary",
  },
];
const swipElements = data.map((ele) => {
  return (
    <SwiperSlide>
      <ImageCard title={ele.title} body={ele.body} imgName={ele.imgName} />
    </SwiperSlide>
  );
});
export default function Swip() {
  const [numSlides, setNumSlides] = useState(1);
  useEffect(() => {
    // console.log("window.innerHeight", window.innerWidth);
    if (window.innerWidth >= 1280) {
      setNumSlides(2);
    } else if (window.innerWidth >= 1560) {
      setNumSlides(3);
    }
  }, []);
  // console.log(numSlides);
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={numSlides}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        className="mySwiper"
      >
        {swipElements}
      </Swiper>
    </>
  );
}
