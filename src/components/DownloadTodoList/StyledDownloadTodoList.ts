import styled, {css} from 'styled-components'

const size = {
    mobile900: "900px"
}

const mobile900 = (inner: any) => css`
  @media (max-width: ${size.mobile900}) {
    ${inner};
  }
`;

export const StyledDownloadTodoList = styled.div`
  display: flex;

  button {
    outline: none;
    background: inherit;
    border: 2px solid #1677ff;
    border-radius: 6px;
    color: #1677ff;
    font-size: 16px;
    font-weight: bold;
    padding: 6.5px 10px;
    transition: .1s;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 5px 0;

    ${mobile900(css`
        font-size: 12px;
        padding: 8.5px 7px;
      `)};

    &:hover {
      background: #1677ff;
      color: white;
    }

    &:active {
      background: #0958d9;
    }
  }
`