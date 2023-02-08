import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 74rem;
  min-height: calc(100vh - 10rem);
  margin: 5rem 0 5rem 0;
  padding: 2.5rem;

  @media (max-width: 786px) {
    width: calc(100vw - 6rem);
    min-height: 48rem;
    margin: 5rem auto;
    padding: 2.5rem;
  }

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
