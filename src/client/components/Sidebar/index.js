import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// App imports
import {phraseType} from '../../types'

import DetailPane from './DetailPane'
import AboutPane from './AboutPane'
import InstructionPane from './InstructionPane'
import ListPane from './ListPane'

// Styles
const PaneWrapper = styled.div`
  padding: 0px 40px;
  width: 100%;
`

// Component
class Sidebar extends React.Component {
  static propTypes = {
    flaggedPhrases: PropTypes.array,
    selectedPhrase: phraseType,
    aboutToggleState: PropTypes.bool,
    flagToggleState: PropTypes.bool,
    setAboutToggleState: PropTypes.func,
    setFlagToggleState: PropTypes.func,
    setSelectedPhrase: PropTypes.func,
  }

  renderActivePane() {
    const {
      flagToggleState,
      selectedPhrase,
      flaggedPhrases,
      aboutToggleState,
      setAboutToggleState,
    } = this.props

    if (aboutToggleState === true) {
      return (
        <AboutPane
          setAboutToggleState={setAboutToggleState}
        />
      )
    } else if (flagToggleState === false) {
      return (
        <InstructionPane />
      )
    } else if (selectedPhrase != null) {
      return (
        <DetailPane
          selectedPhrase={selectedPhrase}
        />
      )
    } else {
      return (<ListPane
        flaggedPhrases={flaggedPhrases}
      />)
    }
  }

  render() {
    return (
      <>
        <PaneWrapper>
          { this.renderActivePane() }
        </PaneWrapper>
      </>
    )
  }
}

export default Sidebar
