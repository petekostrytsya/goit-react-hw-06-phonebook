import styled from '@emotion/styled'


export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 16px;
  font-weight: 500;
`;
export const Input = styled.input`
  width: 250px;
  padding: 5px;
  border-radius: 5px;
  transition: all ease-in-out 0.5s;

  &:hover,
  &:focus {
      box-shadow: 0 0 30px 5px rgba(3, 110, 160, 0.5);
    }
`;