import React from 'react'
import PropTypes from 'prop-types'

// App imports
import NavigationItem from '../../Generic/NavigationItem'

// Component
class ReviewChangesButton extends React.Component {
  static propTypes = {
    setReviewToggleState: PropTypes.func.isRequired,
  }

  showReviewInterface = () => {
    const { setReviewToggleState } = this.props
    setReviewToggleState(true)
  }

  render() {
    return (
      <>
        <NavigationItem onClick={this.showReviewInterface}>Review Changes</NavigationItem>
      </>
    )
  }
}

export default ReviewChangesButton
