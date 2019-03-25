import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import reactStringReplace from'react-string-replace'
import { ScrollSync, ScrollSyncPane} from 'react-scroll-sync'

// App imports
import { phraseType } from '../../types'
import FlaggedPhrase from './FlaggedPhrase'

const EditorWrapper = styled.div`
  border: 5px double black;
  -moz-box-shadow:    inset 0 0 9px #9B9B9B;
  -webkit-box-shadow: inset 0 0 9px #9B9B9B;
  box-shadow:         inset 0 0 9px #9B9B9B;
  width: 100%;
  min-height: 500px;
  box-sizing: border-box;
  position: relative;
`

const EditorTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: 0;
  background-color: transparent;
  z-index: 2;
  padding: 10px;
  position: absolute;
  box-sizing: border-box;
  display: block;
  resize: none;
  letter-spacing: 1px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
  border: none;
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  font-size: 21px;
`

const Backdrop = styled.div`
  overflow: auto;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0px;
  box-sizing: border-box;
`

const Highlights = styled.div`
  white-space: pre-wrap;
  word-wrap: break-word;
  color: transparent;
  padding: 10px;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  font-size: 21px;
`

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

  handleScrollEvent = (event) => {
    const { scrollTop } = event.target
    window.requestAnimationFrame(() => {
      this.refs.backdrop.scrollTop = scrollTop
    })
  }

  handleCursorChange = (event) => {
    const cursorLocation = event.target.selectionStart
    const { setSelectedPhrase } = this.props
    const selectedPhrase = this.getSelectedPhraseByIndex(cursorLocation)
    setSelectedPhrase(selectedPhrase)
  }

  getSelectedPhraseByIndex = (index) => {
    const {
      flaggedPhrases,
      articleText,
    } = this.props
    const haystack = articleText.toLowerCase()
    let selectedPhrase = null

    // See if the cursor hits an instance of a phrase
    flaggedPhrases.map((phrase) => {
      const needle = phrase.text.toLowerCase()
      const re = new RegExp(needle,'gi');
      while (selectedPhrase == null
        && re.exec(haystack)) {
        if(index > re.lastIndex - needle.length
        && index < re.lastIndex) {
          selectedPhrase = phrase
        }
      }
    })

    return selectedPhrase
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
          text={match}
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

    let modifiedText = articleText.replace(/\n$/g, '\n\n')
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
        <EditorWrapper>
          <Backdrop
            ref="backdrop">
            <Highlights>
              {this.generateFlaggedText()}
            </Highlights>
          </Backdrop>
          <EditorTextArea
            value={articleText}
            onChange={this.handleChangeEvent}
            onScroll={this.handleScrollEvent}
            onClick={this.handleCursorChange}
            onFocus={this.handleCursorChange}
            onKeyUp={this.handleCursorChange}
          />
        </EditorWrapper>
      </>
    )
  }
}

export default Editor
