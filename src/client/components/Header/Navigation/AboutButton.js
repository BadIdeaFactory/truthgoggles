import React from 'react'
import PropTypes from 'prop-types'

// App imports
import NavigationItem from '../../Generic/NavigationItem'

// Component
class AboutButton extends React.Component {
  static propTypes = {
    setAboutToggleState: PropTypes.func.isRequired,
  }

  showAboutPane = () => {
    const { setAboutToggleState } = this.props
    setAboutToggleState(true)
  }


  render() {
    return (
      <>
        <NavigationItem onClick={this.showAboutPane}>About</NavigationItem>
      </>
    )
  }
}

export default AboutButton
