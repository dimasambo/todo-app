import styled, {css} from 'styled-components'

const size = {
    mobile650: "650px"
}

const mobile650 = (inner: any) => css`
  @media (max-width: ${size.mobile650}) {
    ${inner};
  }
`;

export const StyledAddTodo = styled.div`
  display: flex;
  width: 100%;
  margin: 5px 0;

  form {
    display: flex;
    align-items: center;

    .inputBox {
      display: flex;
      flex-direction: column;
      
      .input {
        width: 400px;
        margin-right: 5px;
        max-width: 350px;
        outline: none;
        border: 1px solid #d9d9d9;
        border-radius: 6px;
        padding: 7px;
        transition: .1s;

        ${mobile650(css`
          width: 200px;
        `)};

        &:hover {
          border: 1px solid #4096ff;
          outline: none;
        }

        &:focus {
          border: 1px solid #4096ff;
          outline: none;
          box-shadow: 0 0 0 2px rgb(5, 145, 255, 0.1);
        }
      }
      
      span {
        font-size: 11px;

        ${mobile650(css`
          width: 200px;
        `)};
      }
    }
  }
`