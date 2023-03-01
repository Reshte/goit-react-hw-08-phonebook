// import { ContactList } from "./ContactList/ContactList";
// import { ContactForm } from 'components/ContactForm/ContactForm'
// import { FilterForm } from './FilterForm/FilterForm'
// import { Wrapper, Title, TitleContacts } from './App.styled'
import { lazy } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/operations";
// import { getIsLoading, getError } from "redux/selectors"
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute'
import { PrivateRoute } from 'components/PrivateRoute';



const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));


export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);
  
  
  // useEffect(() => {
  //      dispatch(fetchContacts());
  // }, [dispatch])
    
return  (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/Contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );   
}

// export const App = () => {
//   const dispatch = useDispatch();
//   const { isRefreshing } = useAuth();

//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <b>Refreshing user...</b>
//   ) : (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
//           }
//         />
//         <Route
//           path="/Contacts"
//           element={
//             <PrivateRoute redirectTo="/login" component={<TasksPage />} />
//           }
//         />
//       </Route>
//     </Routes>
//   );
// };
