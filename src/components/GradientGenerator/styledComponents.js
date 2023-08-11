import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  background-image: linear-gradient(
    to ${props => props.colorDirection},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 500;
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`

export const Description = styled.p`
  font-size: 20px;
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
`

export const ButtonListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px;
`

export const ColorInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const ColorLabel = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
`

export const ColorInput = styled.input`
  width: 100px;
  height: 50px;
  border: 1px;
  outline: none;
  padding: 0px;
  margin-top: 10px;
  cursor: pointer;
`

export const ColorInputBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`

export const ColorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  border-radius: 5px;
  color: #000000;
  font-family: 'Roboto';
  font-size: 15px;
  background-color: #00c9b7;
  margin-top: 20px;
  cursor: pointer;
`
