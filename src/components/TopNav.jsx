import { AppBar, Box, Link, Toolbar, styled } from "@mui/material"
import '../styles/topnav.css'


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)


const TopNav = () => {
    return (
        <>
            <AppBar position='fixed'>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <img className='logo' src='./logo.svg' alt='gbx logo' />
                    </Box>
                    <Link href='http://action_search'>
                        <ion-icon name='search'></ion-icon>
                    </Link>
                </Toolbar>
            </AppBar>
            <Offset />
        </>
    )
}

export default TopNav