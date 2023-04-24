import { AppBar, Box, IconButton, Link, Toolbar, Typography, styled } from "@mui/material"
import '../styles/topnav.css'


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)


const TopNavGames = () => {

    const backButton = () => {
        history.back()
    }

    return (
        <>
            <AppBar position='fixed'>
                <Toolbar>
                    <IconButton sx={{ mr: 2 }} onClick={backButton}>
                        <ion-icon name="chevron-back"></ion-icon>
                    </IconButton>
                    <Typography variant="subtitle1">
                        {gamesGenre[count].title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Offset />
        </>
    )
}

export default TopNavGames