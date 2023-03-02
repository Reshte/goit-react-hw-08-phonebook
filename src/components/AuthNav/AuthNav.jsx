import { StyledLink } from './AuthNav.styled';


export const AuthNav = () => {
  return (
    <div>
      <StyledLink  to="/register">
        REGISTER
      </StyledLink>
      <StyledLink  to="/login">
        LOG IN
      </StyledLink>
    </div>
  );
};