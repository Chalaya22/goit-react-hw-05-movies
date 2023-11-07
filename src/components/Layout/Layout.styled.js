import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLayout = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
  height: 100vh;
`;
export const HeaderLayout = styled.div`
  margin-bottom: 15px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
`;
export const NavLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 30px;
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  &.active {
    color: white;
    background-color: #3f51b5;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;
