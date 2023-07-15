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
                            <Link to={'/movies/Drama'}>
                                <Item elevation={3}>
                                    <Typography className='genre'>
                                        DRAMA
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