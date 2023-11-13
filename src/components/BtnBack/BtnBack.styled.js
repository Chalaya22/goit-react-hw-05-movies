import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  :hover {
    color: tomato;
  }
`;
export const StyledBtnBack = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  margin-bottom: 15px;
  color: black;
  background-color: white;
  font-weight: 600;
  text-transform: uppercase;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  border: none;
`;
