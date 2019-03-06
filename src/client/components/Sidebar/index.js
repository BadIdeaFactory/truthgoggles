import React from 'react'
import PropTypes from 'prop-types'

// App imports
import {phraseType} from '../../types'

import DetailPane from './DetailPane'
import AboutPane from './AboutPane'
import InstructionPane from './InstructionPane'
import ListPane from './ListPane'

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
        <div>
          { this.renderActivePane() }
        </div>
      </>
    )
  }
}

export default Sidebar
