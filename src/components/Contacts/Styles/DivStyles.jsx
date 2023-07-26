import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(235, 238, 240, 0.956);
  border: 1px black;
  gap: 8px;
  padding: 8px;
`;

// Estilos para el botones
export const DivContainerButtons = styled(DivContainer)`
  background-color: white;
  flex-direction: row;
  padding: 10px;
  margin: 0;
`;
export const DivContainerStatisticsParagraph = styled(DivContainer)`
  background-color: white;
  flex-direction: row;
  gap: 30px;
  border: 1px black;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

// Estilos para el Statistics
export const DivContainerStatistics = styled(DivContainer)`
  background-color: white;
  border: 1px black;
  border-radius: 20px;
  gap: 2px;
  padding: 0;
  margin: 0;
  /* align-items: flex-start; */
  width: 70%;
`;
export const DivContainerPhonebook = styled(DivContainer)`
  background-color: white;
  /* border: 1px solid black; */
  border-radius: 20px;
  gap: 2px;
  padding: 0;
  margin: 0;
  /* align-items: flex-start; */
  width: 70%;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin: 10px;
`;

// Estilos para el Section
export const DivContainerSection = styled(DivContainer)`
  background-color: white;
  width: 80%;
  margin: 30px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;
