import styled from 'styled-components'

export const Button = styled.button`
  background-color: #ffffff;
  width: 110px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  color: #334155;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Roboto';
  opacity: ${props => (props.activeTabClass === 'active' ? '1' : '0.5')};
  cursor: pointer;
`

export const ListContainer = styled.li`
  padding: 5px;
`
