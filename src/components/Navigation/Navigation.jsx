import { useAuth } from '../../hooks/hooks';
import {StyledLink} from './Navigation.styled'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink  to="/">
       HOME
      </StyledLink>
          
      {isLoggedIn && (
        <StyledLink to="/contacts">
         CONTACTS
        </StyledLink>
      )}
    </nav>
  );
};