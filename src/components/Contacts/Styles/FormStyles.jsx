import styled from 'styled-components';

export const FormStyleContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px black;
  gap: 8px;
  padding: 25px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 60%;
  margin-bottom: 20px;
`;
export const FilterStyleContainer = styled(FormStyleContainer)`
  padding: 10px 10px 15px;
`;
