import React from 'react'
import PropTypes from 'prop-types'

// App imports
import AboutButton from './AboutButton'
import NewDocumentButton from './NewDocumentButton'
import ReviewChangesButton from './ReviewChangesButton'

class Navigation extends React.Component {
  static propTypes = {
    setAboutToggleState: PropTypes.func.isRequired,
    setReviewToggleState: PropTypes.func.isRequired,
    startNewDocument: PropTypes.func.isRequired,
  }

  render() {
    const {
      setReviewToggleState,
      setAboutToggleState,
      startNewDocument,
    } = this.props
    return (
      <>
        <div>
          <ReviewChangesButton
            setReviewToggleState={setReviewToggleState}
          />
          <NewDocumentButton
            startNewDocument={startNewDocument}
          />
          <AboutButton
            setAboutToggleState={setAboutToggleState}
          />
        </div>
      </>
    )
  }
}

export default Navigation
