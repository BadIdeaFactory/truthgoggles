import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// App Imports
import { phraseType } from '../../../types'
import { calculatePhraseColor } from '../../../helpers'

// Styles

const Wrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 82px;
  padding: 15px;
  margin-top: 20px;
  box-shadow: 2px 2px 0 0 ${props => calculatePhraseColor(props.phrase)};
`

const FlagText = styled.div`
  font-family: "Roboto Slab";
  font-size: 22px;
  font-weight: 300;
`

// Component
class FlagCard extends React.Component {
  static propTypes = {
    flaggedPhrase: phraseType,
  }

  render() {
    const { flaggedPhrase } = this.props
    return (
      <>
        <Wrapper
          phrase={flaggedPhrase}
        >
          <FlagText>
            { flaggedPhrase.text }
          </FlagText>
        </Wrapper>
      </>
    )
  }
}

export default FlagCard
