import styled from 'styled-components'

export const MiddleBlock = styled.section`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
`

export const Content = styled.p`
  padding: 0.75rem 0 0.75rem;
`

export const ContentWrapper = styled.div`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`

export const ClientContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  & .client {
    font-size: 21px;
    margin: 8px 0;
  }
`
