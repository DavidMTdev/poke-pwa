import styled, { keyframes } from 'styled-components'

// eslint-disable-next-line no-unused-vars
const loading = variable => {
  const rotate = keyframes`
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
`
  return {
    DisableContainer: styled.div`
      position: absolute;
      top: 5vh;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      max-height: calc(100vh - 5vh);
      background-color: #00000080;
      z-index: 1;
    `,

    LoadingContainer: styled.div`
      display: flex;
      justify-content: center;
      margin: 20px 0;
    `,

    Loading: styled.div`
      display: inline-block;
      position: relative;
      width: ${props => props.size}px;
      height: ${props => props.size}px;
    `,

    LoadingItem: styled.div`
      position: absolute;
      width: ${props => props.size}px;
      height: ${props => props.size}px;
      background: #fff;
      border-radius: 50%;
      animation: ${rotate} 1.2s linear infinite;
      &:nth-child(${props => props.child}) {
        animation-delay: ${props => props.delay}s;
        top: ${props => props.top}px;
        left: ${props => props.left}px;
      }
    `
  }
}

export default loading
