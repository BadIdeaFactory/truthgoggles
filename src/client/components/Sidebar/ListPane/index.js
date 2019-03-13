import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// App Imports
import FlagCard from './FlagCard'
import FlagCount from './FlagCount'

// Styles
const FlagList = styled.div`
  border-top: 1px solid black;
  padding: 10px 0px;
`

// Component
class ListPane extends React.Component {
  static propTypes = {
    flaggedPhrases: PropTypes.array,
  }

  render() {
    const { flaggedPhrases } = this.props
    return (
      <>
        <div>
          <FlagCount
            flaggedPhrases={flaggedPhrases}
          />
          <FlagList>
            { flaggedPhrases.map(flaggedPhrase => (
              <FlagCard
                flaggedPhrase={flaggedPhrase}
              />
            ))}
          </FlagList>
        </div>
      </>
    )
  }
}

export default ListPane
