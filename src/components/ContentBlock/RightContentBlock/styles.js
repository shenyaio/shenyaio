import styled from 'styled-components'

export const RightBlockContainer = styled.section`
  position: relative;
  padding: 10rem 0 8rem;

  img {
    width: 80%;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 0 2rem;
    img {
      width: 100%;
    }
  }
`

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
`

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`
