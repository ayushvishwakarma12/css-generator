import {Component} from 'react'

import {
  AppContainer,
  ContentContainer,
  Heading,
  Description,
  ButtonListContainer,
  ColorInputContainer,
  ColorLabel,
  ColorInput,
  ColorInputBoxContainer,
  ColorContainer,
  Button,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeTab: gradientDirectionsList[0].value,
    firstInputColor: '#8ae323',
    secondInputColor: '#014f7b',
    firstColor: '#8ae323',
    secondColor: '#014f7b',
  }

  onSelectTab = directionId => {
    this.setState({activeTab: directionId})
  }

  onChangeFirstColor = event => {
    this.setState({firstInputColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondInputColor: event.target.value})
  }

  onGenerateColor = event => {
    event.preventDefault()
    const {firstInputColor, secondInputColor} = this.state
    this.setState({firstColor: firstInputColor, secondColor: secondInputColor})
  }

  render() {
    const {
      activeTab,
      firstColor,
      secondColor,
      firstInputColor,
      secondInputColor,
    } = this.state
    return (
      <AppContainer
        firstColor={firstColor}
        secondColor={secondColor}
        colorDirection={activeTab}
        data-testid="gradientGenerator"
      >
        <ContentContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Description>Choose Direction</Description>
          <ButtonListContainer>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                gradientDirectionsList={eachItem}
                activeTab={activeTab}
                onSelectTab={this.onSelectTab}
              />
            ))}
          </ButtonListContainer>
          <Description>Pick the colors</Description>
          <ColorInputContainer onSubmit={this.onGenerateColor}>
            <ColorContainer>
              <ColorInputBoxContainer>
                <ColorLabel htmlFor="color-input-1">
                  {firstInputColor}
                </ColorLabel>
                <ColorInput
                  id="color-input-1"
                  value={firstInputColor}
                  onChange={this.onChangeFirstColor}
                  type="color"
                />
              </ColorInputBoxContainer>
              <ColorInputBoxContainer>
                <ColorLabel htmlFor="color-input-1">
                  {secondInputColor}
                </ColorLabel>
                <ColorInput
                  id="color-input-1"
                  value={secondInputColor}
                  type="color"
                  onChange={this.onChangeSecondColor}
                />
              </ColorInputBoxContainer>
            </ColorContainer>
            <Button type="submit">Generate</Button>
          </ColorInputContainer>
        </ContentContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
