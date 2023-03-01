import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/hooks';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import HomeSharpIcon from '@mui/icons-material/HomeSharp';



export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>
          PhoneBook
        </Typography>
        <IconButton>
          <HomeSharpIcon fontSize="medium" color='inherit' />
        </IconButton>
        <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
          </AppBar> 
  );
};
