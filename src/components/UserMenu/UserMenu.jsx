// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';


export const UserMenu = () => {
//   const dispatch = useDispatch();
//   const { user } = useAuth();

  return (
    <div >
      <p>Welcome, Имя пользователя</p>
      <button type="button" onClick={console.log( "сюда нужно задиспатчить разлогинивание")}>
        Logout
      </button>
    </div>
  );
};


//диспатч {() => dispatch(logOut())}