import {Button, ListContainer} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionsList, onSelectTab, activeTab} = props
  const {value, displayText} = gradientDirectionsList

  const onSelectColorTab = () => {
    onSelectTab(value)
  }

  const activeTabClass = value === activeTab ? 'active' : null

  return (
    <ListContainer>
      <Button
        activeTabClass={activeTabClass}
        type="button"
        onClick={onSelectColorTab}
      >
        {displayText}
      </Button>
    </ListContainer>
  )
}

export default GradientDirectionItem
