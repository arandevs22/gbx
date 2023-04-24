import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination"
import '../styles/games.css'
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Box, Container, Typography, Button, Grid, AppBar, Toolbar, IconButton, styled } from "@mui/material";
import { useLoaderData } from "react-router-dom";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

const Games = () => {

  const { gamesGenre } = useLoaderData()

  const [count, setCount] = useState(0)

  const handleSlideChange = (swiper) => {
    setCount(swiper.realIndex)
  }

  const backButton = () => {
    history.back()
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton sx={{ mr: 2 }} onClick={backButton}>
            <ion-icon name="chevron-back"></ion-icon>
          </IconButton>
          <Typography className="genre" variant="subtitle1">
            {gamesGenre[0].genre} GAMES
          </Typography>
        </Toolbar>
      </AppBar>
      <Offset />
      <Box mt={5}>
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
          {gamesGenre.map((cover) => (
            <SwiperSlide key={cover.id}>
              <img src={`https://firebasestorage.googleapis.com/v0/b/arandevs-a4605.appspot.com/o/hoo-play%2Fimagenes%2Fjuegos%2Fposter%2F${cover.id}.jpg?alt=media&token=47065a24-8b97-4b14-9aae-17168b675d7e`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Container sx={{ marginTop: 8 }}>
        <Box sx={{ textAlign: "center", marginBottom: 5 }}>
          <Typography className="title" variant="h6" color={'#fff'}>
            {gamesGenre[count].title}
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Button size="large" fullWidth={true} className="play-btn" href={gamesGenre[count].reference} variant="contained" color="primary">
                <ion-icon name="game-controller"></ion-icon> &nbsp; JUGAR
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Button size="large" fullWidth={true} className="play-btn" href={gamesGenre[count].rom} variant="contained" color="primary">
                <ion-icon name="download"></ion-icon> &nbsp; ROM
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Games

export const loaderGamesGenre = async ({ params }) => {
  const res = await fetch(`https://api-retro-game.azurewebsites.net/api/games/game-boy-advance/${params.genre}`)

  const gamesGenre = await res.json()

  return { gamesGenre }
}