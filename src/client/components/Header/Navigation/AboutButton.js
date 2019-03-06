import React from 'react'
import PropTypes from 'prop-types'

// App imports

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
        <button onClick={this.showAboutPane}>About</button>
      </>
    )
  }
}

export default AboutButton
