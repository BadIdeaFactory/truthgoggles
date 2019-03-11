import React from 'react'
import PropTypes from 'prop-types'

// App imports
import NavigationItem from '../../Generic/NavigationItem'

// Component
class NewDocumentButton extends React.Component {
  static propTypes = {
    startNewDocument: PropTypes.func.isRequired,
  }

  showNewDocumentPrompt = () => {
    // For now there is no prompt.
    const { startNewDocument } = this.props
    startNewDocument()
  }

  render() {
    return (
      <>
        <NavigationItem onClick={this.showNewDocumentPrompt}>New Document</NavigationItem>
      </>
    )
  }
}

export default NewDocumentButton
