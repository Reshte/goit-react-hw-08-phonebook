import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { useAuth } from '../../hooks/hooks';
import { Button } from "@mui/material"


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div >
      <p>Welcome, {user.name}</p>
      <p>You are logged in as {user.email}</p>
      <Button variant="contained" type="button" onClick={() => dispatch(logOut())}>Logout</Button>
      </div>
  );
};

