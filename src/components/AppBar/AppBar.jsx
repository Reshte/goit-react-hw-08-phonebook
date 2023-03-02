import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/hooks';
import { AppBar, Toolbar,  Box  } from "@mui/material"


export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
     <Box sx={{ flexGrow: 1, mb:1,}}>
      <AppBar position="static">
      <Toolbar>
        <Navigation />
        {isLoggedIn ?
          <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar> 
      </Box>
  );
};




