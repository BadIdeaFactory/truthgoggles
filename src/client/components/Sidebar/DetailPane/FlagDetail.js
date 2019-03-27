import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// App Imports
import { phraseType } from '../../../types'
import { calculatePhraseColor } from '../../../helpers'

// Styles
const Wrapper = styled.div`
`

const SelectedPhrase = styled.span`
  margin: 0px;
  padding: 0px;
  position: relative;
  background: transparent;
  display: inline-block;
`
const SelectedPhraseText = styled.div`
  font-size: 24px;
  font-family: "Roboto Slab";
  font-weight: normal;
  background: transparent;
  position: relative;
  z-index: 2;
`

const SelectedPhraseBackground = styled.div`
  display: inline-block;
  position: absolute;
  background: ${props => calculatePhraseColor(props.phrase)};
  height: 8px;
  width: 100%;
  left: 2px;
  bottom: 1px;
  box-sizing: content-box;
  z-index: 1;
`

// Component
class FlagDetail extends React.Component {
  static propTypes = {
    selectedPhrase: phraseType,
  }

  render() {
    const { selectedPhrase } = this.props
    const { text } = selectedPhrase
    return (
      <>
        <Wrapper>
          <SelectedPhrase>
            <SelectedPhraseText>
              { text }
            </SelectedPhraseText>
            <SelectedPhraseBackground
              phrase={selectedPhrase}
            />
          </SelectedPhrase>
        </Wrapper>
      </>
    )
  }
}

export default FlagDetail
