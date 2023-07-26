import styled from 'styled-components';

export const InputStyle = styled.input`
  border: none;
  border-bottom: 1px solid blue;
  border-bottom: ${props =>
    props.disabled ? '1px dashed gray' : '1px solid blue'};
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 8px 15px;
  box-shadow: 2px 2px 2px 2px rgba(191, 211, 236, 0.374);
  color: #7d7c7c;
  text-shadow: #7d81b7 3px 3px 5px;
`;
