import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// App Imports
import { phraseType } from '../../types'
import { calculatePhraseColor } from '../../helpers'

const PhraseWrapper = styled.mark`
  cursor: pointer;
  color: transparent;
  margin: 0px;
  padding: 0px;
  position: relative;
  background: transparent;
`

const PhraseBackground = styled.div`
  display: inline-block;
  position: absolute;
  background: ${props => calculatePhraseColor(props.phrase)};
  height: 8px;
  width: 100%;
  left: 0px;
  bottom: -2px;
  transition: .25s;
  box-sizing: content-box;

  .selected & {
    height: 100%;
    padding: 2px;
    bottom: -2px;
    left: -2px;
  }
`

class FlaggedPhrase extends React.Component {
  static propTypes = {
    selectedPhrase: phraseType,
    phrase: phraseType,
    text: PropTypes.string
  }

  closeAboutPane = () => {
    const { setAboutToggleState } = this.props
    setAboutToggleState(false)
  }

  render() {
    const {
      phrase,
      text,
      selectedPhrase, } = this.props
    const { dCount, rCount } = phrase
    const totalCount = phrase.dCount + phrase.rCount
    const saturation = phrase.dCount / totalCount
    const isSelected = (selectedPhrase != null
      && phrase.text == selectedPhrase.text)

    return (
      <>
        <PhraseWrapper
          className={isSelected?"selected":""}
        >
          { text }
          <PhraseBackground
            phrase={phrase}
          />
        </PhraseWrapper>
      </>
    )
  }
}

export default FlaggedPhrase
