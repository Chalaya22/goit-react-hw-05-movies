import styled from 'styled-components';

export const StyledCastsList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledCastsItem = styled.li`
  /* width: calc((100% - 60px) / 4); */
  min-height: 280px;
  list-style-type: none;
`;
export const StyledCastsImg = styled.img`
  max-width: 220px;
  height: 305px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
