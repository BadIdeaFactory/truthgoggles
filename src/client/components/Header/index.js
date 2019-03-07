import React from 'react'
import PropTypes from 'prop-types'

// App Imports
import Branding from './Branding'
import Navigation from './Navigation'


class Header extends React.Component {
  static propTypes = {
    startNewDocument: PropTypes.func.isRequired,
    setAboutToggleState: PropTypes.func.isRequired,
    setReviewToggleState: PropTypes.func.isRequired,
  }

  render() {
    const {
      startNewDocument,
      setAboutToggleState,
      setReviewToggleState,
    } = this.props
    return (
      <>
        <Branding />
        <Navigation
          setAboutToggleState={setAboutToggleState}
          startNewDocument={startNewDocument}
          setReviewToggleState={setReviewToggleState}
        />
      </>
    )
  }
}

export default Header
