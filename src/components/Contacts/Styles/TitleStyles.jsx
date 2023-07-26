import styled from 'styled-components';

export const StyledH1 = styled.h1`
  font-size: 40px;
  margin: 10px 0 0;
  font-weight: 700;
  color: #000000;
  padding: 20px;
  text-shadow: #846161 5px 5px 10px;
`;

// Estilos para el h2
export const StyledH2 = styled(StyledH1)`
  /* background-color: green; */
  font-size: 25px;
  text-shadow: #6a7f8d 3px 3px 10px;
  padding: 0;
  margin-bottom: 10px;
  /* text-shadow: 5px 5px #558abb; */
`;
export const StatisticsTitle = styled(StyledH1)`
  /* background-color: green; */
  font-size: 25px;
  text-shadow: #668ba3 3px 3px 10px;
  padding: 0;
  margin-bottom: 10px;
  display: flex;
  align-items: center !important;
  /* text-shadow: 5px 5px #558abb; */
`;
