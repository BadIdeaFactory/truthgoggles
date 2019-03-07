import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// App Imports
import { phraseType } from '../../types'
import { calculatePhraseColor } from '../../helpers'

const PhraseWrapper = styled.mark`
  background: ${props => calculatePhraseColor(props.phrase)};
  cursor: pointer;
`

class FlaggedPhrase extends React.Component {
  static propTypes = {
    setSelectedPhrase: PropTypes.func,
    selectedPhrase: phraseType,
    phrase: phraseType,
  }

  closeAboutPane = () => {
    const { setAboutToggleState } = this.props
    setAboutToggleState(false)
  }

  handleClick = () => {
    const {
      setSelectedPhrase,
      phrase,
    } = this.props
    setSelectedPhrase(phrase)
  }

  render() {
    const { phrase } = this.props
    const { text, dCount, rCount } = phrase
    const totalCount = phrase.dCount + phrase.rCount
    const saturation = phrase.dCount / totalCount
    return (
      <>
        <PhraseWrapper
          phrase={phrase}
          onClick={this.handleClick}
        >
          { phrase.text }
        </PhraseWrapper>
      </>
    )
  }
}

export default FlaggedPhrase
