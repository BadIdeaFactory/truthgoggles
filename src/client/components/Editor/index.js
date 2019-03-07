import React from 'react'
import PropTypes from 'prop-types'
import reactStringReplace from'react-string-replace'

// App imports
import { phraseType } from '../../types'
import FlaggedPhrase from './FlaggedPhrase'

class Editor extends React.Component {

  static propTypes = {
    articleText: PropTypes.string,
    flaggedPhrases: PropTypes.array,
    selectedPhrase: phraseType,
    flagToggleState: PropTypes.bool,
    setSelectedPhrase: PropTypes.func,
    setArticleText: PropTypes.func,
  }

  handleChangeEvent = (event) => {
    const { setArticleText } = this.props
    const newText = event.target.value
    setArticleText(newText)
  }

  insertFlaggedPhrases = (text, phrase) => {
    const {
      selectedPhrase,
      setSelectedPhrase,
    } = this.props
    const needle = phrase.text
    const processedText = reactStringReplace(
      text,
      needle,
      (match, i) => (
        <FlaggedPhrase
          key={match+i}
          phrase={phrase}
          setSelectedPhrase={setSelectedPhrase}
          selectedPhrase={selectedPhrase}
        />
      )
    )
    return processedText
  }

  generateFlaggedText = () => {
    const {
      articleText,
      flaggedPhrases,
    } = this.props

    let modifiedText = articleText
    flaggedPhrases.map((phrase) => {
      modifiedText = this.insertFlaggedPhrases(modifiedText, phrase)
    })

    return modifiedText
  }


  render() {
    const {
      articleText,
      setArticleText,
    } = this.props
    return (
      <>
        <div>
          <div>
            {this.generateFlaggedText()}
          </div>
          <textarea

            value={articleText}
            onChange={this.handleChangeEvent}
          />
        </div>
      </>
    )
  }
}

export default Editor
