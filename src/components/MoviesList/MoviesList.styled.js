import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMovList = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  line-height: 0.8;
`;
export const StyledUl = styled.ul``;
export const StyledLink = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  color: grey;

  :hover {
    color: tomato;
  }
`;
