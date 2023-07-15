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

  const { moviesGenre } = useLoaderData()

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
          <IconButton sx={{ mr: 5 }} onClick={backButton}>
            <ion-icon name="chevron-back" size='large'></ion-icon>
          </IconButton>
          <Typography className="genre" variant="h6">
            Peliculas {moviesGenre[0].genre}
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
          {moviesGenre.map((cover) => (
            <SwiperSlide key={cover.id}>
              <img className="cover-img" src={`https://image.tmdb.org/t/p/w300/${cover.poster_path}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Container sx={{ marginTop: 8 }}>
        <Box sx={{ textAlign: "center", marginBottom: 5 }}>
          <Typography className="title" variant="h6" color={'#fff'}>
            {moviesGenre[count].title}
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Button size="large" fullWidth={true} className="play-btn" href={`go:${moviesGenre[count].id}`} variant="contained" color="primary">
                <ion-icon name="game-controller"></ion-icon> &nbsp; PLAY
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Button size="large" fullWidth={true} className="play-btn" href={moviesGenre[count].trailer} variant="contained" color="primary">
                <ion-icon name="download"></ion-icon> &nbsp; TRAILER
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Games

export const loaderMoviesGenre = async ({ params }) => {
  const res = await fetch(`https://api-retro-game-b8cce30f0948.herokuapp.com/api/movies/genre/${params.genre}`)

  const moviesGenre = await res.json()

  return { moviesGenre }
}