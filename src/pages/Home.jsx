import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Container, Grid, createTheme, styled, ThemeProvider, Paper } from '@mui/material'
import TopNav from '../components/TopNav'
import '../styles/home.css'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.h6,
    textAlign: 'center',
    padding: '20px',
}))

const darkTheme = createTheme({ palette: { mode: 'dark' } })


const Home = () => {

    return (
        <>
            <Container sx={{ marginTop: 3 }}>
                <TopNav />
                <Grid container spacing={2}>
                    <ThemeProvider theme={darkTheme}>
                        <Grid item xs={6}>
                            <Link to={'/games/shooter'}>
                                <Item elevation={3}>
                                    <Typography className='genre'>
                                        SHOOTER
                                    </Typography>
                                </Item>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to={'/games/plataforma'}>
                                <Item elevation={3}>
                                    <Typography className='genre'>
                                        PLATAFORMA
                                    </Typography>
                                </Item>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to={'/games/peleas'}>
                                <Item elevation={3}>
                                    <Typography className='genre'>
                                        PELEAS
                                    </Typography>
                                </Item>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to={'/games/rpg'}>
                                <Item elevation={3}>
                                    <Typography className='genre'>
                                        RPG
                                    </Typography>
                                </Item>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to={'/games/deportes'}>
                                <Item elevation={3}>
                                    <Typography className='genre'>
                                        DEPORTES
                                    </Typography>
                                </Item>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to={'/games/cartas'}>
                                <Item elevation={3}>
                                    <Typography className='genre'>
                                        CARTAS
                                    </Typography>
                                </Item>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to={'/games/estrategia'}>
                                <Item elevation={3}>
                                    <Typography className='genre'>
                                        ESTRATEGIA
                                    </Typography>
                                </Item>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to={'/games/beat%20em%20up'}>
                                <Item elevation={3}>
                                    <Typography className='genre'>
                                        BEAT EM UP
                                    </Typography>
                                </Item>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to={'/games/carreras'}>
                                <Item elevation={3}>
                                    <Typography className='genre'>
                                        CARRERAS
                                    </Typography>
                                </Item>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to={'/games/aventura'}>
                                <Item elevation={3}>
                                    <Typography className='genre'>
                                        AVENTURA
                                    </Typography>
                                </Item>
                            </Link>
                        </Grid>
                    </ThemeProvider>
                </Grid>
            </Container>
        </>
    )
}

export default Home