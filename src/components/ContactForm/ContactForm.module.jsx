import styled from '@emotion/styled'


export const Form = styled.form`
  width: 460px;
  height: 206px;
  background-color: #bbc6fc;
  border-radius: 5px;
  border-color: #bbc6fc;
  border: 2px solid rgb(9, 16, 110);
  transition: all ease-in-out 0.5s;

  &:hover,
  &:focus {
      box-shadow: 0 0 30px 5px rgba(3, 110, 160, 0.5);
    }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-left: 20px;
`;

export const Input = styled.input`
  width: 250px;
  height: 20px;
  padding: 5px;
  border-radius: 5px;
  border-color: transparent;

  &:hover,
  &:focus {
      box-shadow: 0 0 30px 5px rgba(3, 110, 160, 0.5);
    }
`;
export const Button = styled.button`
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 10px;
  padding: 4px;
  cursor: pointer;
  transition: all ease-in-out 0.5s;

    &:hover,
    &:focus {
        background-color: blue;
        color: yellow; 
    }

`;