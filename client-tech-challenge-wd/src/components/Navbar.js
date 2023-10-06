import { AppBar, Link, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
    return (
    <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <Link href='/' underline="none" color='white'>The Phone Cave</Link>
          </Typography>
        </Toolbar>
    </AppBar>
    );
}
 
export default Navbar;