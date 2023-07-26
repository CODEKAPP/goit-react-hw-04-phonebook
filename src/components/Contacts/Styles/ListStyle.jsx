import styled from 'styled-components';

export const ListStyle = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 490px;
flex-direction: column;
`;

export const ItemList = styled.li`
  display: flex;
  /* width: 130px; */
  height: 20px;
  text-align: left;
  margin: 5px;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  text-shadow: #b1917c 3px 3px 5px;
`;
