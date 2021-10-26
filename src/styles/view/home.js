import styled from 'styled-components'

// eslint-disable-next-line no-unused-vars
const home = variable => {
  return {
    CardContainer: styled.div`
      display: flex;
      flex-wrap: wrap;
      margin: 50px 20px;
    `,

    CardLink: styled.div`
      display: contents;
    `,

    CardItem: styled.div`
      width: ${props => props.width}%;
      min-height: 100px;
      background-color: ${props => props.theme.primary};
      border-radius: 4px;
      height: calc(100% - 20px);
      width: calc(${props => props.width}% - 20px);
      margin: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,

    CardText: styled.p`
      margin: 0;
      margin-bottom: 10px;
      font-weight: 600;
      color: ${props => props.theme.blue};
    `,

    CardImage: styled.img`
      width: calc(100% - 40px);
      height: calc(100% - 20px);
      margin: 10px 20px;
    `
  }
}

export default home
