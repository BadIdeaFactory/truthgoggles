import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// App imports
import AboutButton from './AboutButton'
import NewDocumentButton from './NewDocumentButton'
import ReviewChangesButton from './ReviewChangesButton'

// Styles
const NavigationWrapper = styled.div `
  display: flex;
  justify-content: flex-end;
`

// Component
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
        <NavigationWrapper>
          <ReviewChangesButton
            setReviewToggleState={setReviewToggleState}
          />
          <NewDocumentButton
            startNewDocument={startNewDocument}
          />
          <AboutButton
            setAboutToggleState={setAboutToggleState}
          />
        </NavigationWrapper>
      </>
    )
  }
}

export default Navigation
