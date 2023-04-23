import styled from 'styled-components'
import fundo from '../../assets/timer.jpg'

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  background-image: url(${fundo});
  background-size: 100% 100%;
  background-attachment: fixed;
  color: rgb(255, 255, 255);

  h1 {
    text-shadow: 1px 3px 0.5rem darkblue;
  }

  span {
    font-size: 3rem;
  }
`
