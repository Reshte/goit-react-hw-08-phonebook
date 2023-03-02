import { NavLink } from "react-router-dom"
import styled from '@emotion/styled'

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  position: relative;
  text-decoration: none;
  color: white;
  font-weight: 700;
  &.active {
     text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
                 0px -5px 35px rgb(0, 0, 0);


     }
`