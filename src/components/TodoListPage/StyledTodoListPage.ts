import styled, {css} from 'styled-components'

const size = {
    mobile800: "800px",
}

const mobile800 = (inner: any) => css`
  @media (max-width: ${size.mobile800}) {
    ${inner};
  }
`;

export const StyledTodoListPage = styled.div`
  display: flex;
  flex-direction: column;

  .todoListsWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    margin-top: 15px;

    ${mobile800(css`
      grid-template-columns: 1fr;
    `)};
  }
`