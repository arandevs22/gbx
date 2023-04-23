import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination"
import './index.css'
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import games from "./data/games";
import { Box, Container, Typography, Button } from "@mui/material";



export default function App() {

  const [count, setCount] = useState(0)

  const handleSlideChange = (swiper) => {
    setCount(swiper.realIndex)
  }

  console.log(count)

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
        loop={true}
        navigation
      >
        {games.slice(0, 10).map((cover) => (
          <SwiperSlide key={cover.id}>
            <img src={`https://firebasestorage.googleapis.com/v0/b/arandevs-a4605.appspot.com/o/hoo-play%2Fimagenes%2Fjuegos%2Fposter%2F${cover.id}.jpg?alt=media&token=47065a24-8b97-4b14-9aae-17168b675d7e`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Container>
        <Box sx={{ textAlign: "center" }} mb={3}>
          <Typography variant="h6" color={'#fff'}>
            {games[count].title}
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }} mb={3}>
          <Button href={games[count].reference} variant="contained" color="primary">
            JUGAR AHORA
          </Button>
        </Box>
      </Container>
    </>
  );
}
