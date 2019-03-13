import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// App Imports

// Styles
const Wrapper = styled.div`
  display: flex;
`

const Total = styled.div`
  font-family: Roboto;
  font-size: 54px;
  font-weight: 100;
  line-height: 72px;
`

const Label = styled.div`
  font-family: Roboto;
  font-size: 18px;
  width: 86px;
  height: 46px;
  line-height: 24px;
  text-transform: uppercase;
  padding: 10px;
`

// Component
class FlagCount extends React.Component {
  static propTypes = {
    flaggedPhrases: PropTypes.array,
  }

  render() {
    const { flaggedPhrases } = this.props
    const count = flaggedPhrases.length
    return (
      <>
        <Wrapper>
          <Total>{count}</Total>
          <Label>Flagged<br/>Phrase{count==1?"":"s"}</Label>
        </Wrapper>
      </>
    )
  }
}

export default FlagCount
