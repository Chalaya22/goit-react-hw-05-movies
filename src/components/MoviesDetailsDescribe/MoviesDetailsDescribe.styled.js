import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StyleDetailsdescribe = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 40px;
  list-style: none;
  padding-bottom: 15px;
  border-bottom: 1px solid black;
  color: black;
`;
export const LinkListCastReviews = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: start;
  padding: 0;
  list-style: none;
`;
export const StyledLinkCastReviews = styled(Link)`
  text-decoration: none;

  padding: 5px 20px;
  border: none;
  background-color: #3f51b5;
  color: white;
  font-weight: 600;
  border-radius: 4px;
`;
