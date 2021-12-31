import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f9fafb;
`

export const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 4px rgb(0, 0, 0, 0.1);
  flex-direction: column;
`

export const CardContentContainer = styled.div`
  flex-direction: row;
  align-items: center;
  margin: 24px;
`

export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  display: inline-block;
`

export const InfoContainer = styled.div`
  flex-direction: column;
  margin-left: 16px;

  .title {
    font-size: 24px;
    padding: 0;
    color: #16becf;
    display: block;
  }

  .description {
    font-size: 16px;
    font-weight: normal;
    margin-top: 8px;
    color: #878787;
    display: block;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  flex-direction: row;
`

export const Button = styled.a.attrs({ target: '_blank' })`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px;
  color: #16becf;
  border-top-width: 1px;
  border-left-width: 0.5px;
  border-right-width: 0.5px;
  border-bottom-width: 0px;
  border-color: #eeeeee;
  border-style: solid;
  transition: background-color 360ms, border-color 360ms, color 360ms;

  svg {
    height: 1.34em;

    path {
      fill: #16BECF;
    }
  }

  :hover {
    background-color: #16BECF;
    border-color: #16BECF;
    color: white;

    svg {
      path {
        fill: white;
      }
    }
  }

  :first-child {
    border-left-width: 0px;
    border-bottom-left-radius: 10px;
  }

  :last-child {
    border-right-width: 0px;
    border-bottom-right-radius: 10px;
  }
}
`
