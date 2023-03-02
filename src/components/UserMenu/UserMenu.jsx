import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { useAuth } from '../../hooks/hooks';
import { Button } from "@mui/material"
import { Wrapper } from './UserMenu.styled'


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper >
      <p> {user.email}</p>
      <Button variant="contained" type="button" onClick={() => dispatch(logOut())}>Logout</Button>
    </Wrapper>
  );
};

