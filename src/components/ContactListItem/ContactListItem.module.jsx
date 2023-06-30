import styled from '@emotion/styled'


export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactName = styled.p`
  font-family: 'Segoe UI';
  font-weight: 700;
  margin: 14px;
`;

export const ContactNumber = styled.span`
  margin-left: 10px;
`;

export const Button = styled.button`
  width: 80px;
  margin: 8px;
  padding: 4px 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease-in-out 0.5s;

    &:hover,
    &:focus {
        background-color: blue;
        color: yellow;
        border: transparent;
        scale: 1.1; 
    }
`;