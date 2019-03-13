import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// App Imports
import Branding from './Branding'
import Navigation from './Navigation'

// Styles
const HeaderWrapper = styled.div `
  display: flex;
  justify-content: space-between;
`

// Component
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
        <HeaderWrapper>
          <Branding />
          <Navigation
            setAboutToggleState={setAboutToggleState}
            startNewDocument={startNewDocument}
            setReviewToggleState={setReviewToggleState}
          />
        </HeaderWrapper>
      </>
    )
  }
}

export default Header
