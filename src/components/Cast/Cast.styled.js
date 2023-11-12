import styled from 'styled-components';

export const StyledCastsList = styled.ul`
  display: flex;
  text-align: center;
  gap: 16px;
  flex-wrap: wrap;
  text-decoration: none;
  justify-content: center;
`;
export const StyledCastsItem = styled.li`
  width: calc((100% - 96px) / 6);
  min-height: 280px;
`;
export const StyledCastsImg = styled.img`
  width: 100%;
  min-height: 180px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
