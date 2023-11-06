import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import useAxios from "../hooks/useAxios";
import Card from "./Card";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

export default function Carousel({ url, songs }) {
  const [albums, setAlbums] = useState([]);

  const { response } = useAxios(url);

  const swiperRef = useRef();

  useEffect(() => {
    if (!songs?.length) {
      if (response) {
        setAlbums(response);
      }
    } else {
      setAlbums(songs);
    }
  }, [response, songs]);

  return (
    <Swiper
      className="w-full"
      spaceBetween={36}
      slidesPerView={"auto"}
      initialSlide={0}
      modules={{ Navigation }}
      allowTouchMove
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {albums.map((album) => (
        <SwiperSlide key={album.id} className="max-w-[10rem]">
          <Card album={album} />{" "}
        </SwiperSlide>
      ))}
      <button
        className="absolute z-50 w-12 h-12 text-2xl font-bold text-white rounded-full top-[40%] bg-primary drop-shadow-lg"
        onClick={() => swiperRef.current.slidePrev()}
      >
        <KeyboardArrowLeft fontSize="large" />
      </button>
      <button
        className="absolute z-50 w-12 h-12 text-2xl font-bold right-0 text-white rounded-full top-[40%] bg-primary drop-shadow-lg"
        onClick={() => swiperRef.current.slideNext()}
      >
        <KeyboardArrowRight fontSize="large" />
      </button>
    </Swiper>
  );
}
