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
      /* &:nth-child(2) {
        animation-delay: ${props => props.delay}s;
        top: ${props => props.top}px;
        left: ${props => props.left}px;
      }
      &:nth-child(3) {
        animation-delay: ${props => props.delay}s;
        top: ${props => props.top}px;
        left: ${props => props.left}px;
      }
      &:nth-child(4) {
        animation-delay: ${props => props.delay}s;
        top: ${props => props.top}px;
        left: ${props => props.left}px;
      }
      &:nth-child(5) {
        animation-delay: ${props => props.delay}s;
        top: ${props => props.top}px;
        left: ${props => props.left}px;
      }
      &:nth-child(6) {
        animation-delay: ${props => props.delay}s;
        top: ${props => props.top}px;
        left: ${props => props.left}px;
      }
      &:nth-child(7) {
        animation-delay: ${props => props.delay}s;
        top: ${props => props.top}px;
        left: ${props => props.left}px;
      }
      &:nth-child(8) {
        animation-delay: ${props => props.delay}s;
        top: ${props => props.top}px;
        left: ${props => props.left}px;
      }
      &:nth-child(9) {
        animation-delay: ${props => props.delay}s;
        top: ${props => props.top}px;
        left: ${props => props.left}px;
      }
      &:nth-child(10) {
        animation-delay: ${props => props.delay}s;
        top: ${props => props.top}px;
        left: ${props => props.left}px;
      }
      &:nth-child(11) {
        animation-delay: ${props => props.delay}s;
        top: ${props => props.top}px;
        left: ${props => props.left}px;
      }
      &:nth-child(12) {
        animation-delay: ${props => props.delay}s;
        top: ${props => props.top}px;
        left: ${props => props.left}px;
      } */
    `
  }
}

export default loading
