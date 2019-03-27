import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// App Imports
import { phraseType } from '../../../types'
import { calculatePhraseColor } from '../../../helpers'

// Styles
const Wrapper = styled.div`

`

const PercentageRow = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`

const PercentageBox = styled.div`
`

const BoxDescription = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  line-height: 16px;
`

const PartyName = styled.div`
  margin: 0px;
  padding: 0px;
  position: relative;
  background: transparent;
`

const PartyNameText = styled.div`
  position: relative;
  z-index: 2;
`

const PartyNameBackground = styled.div`
  background: ${props => props.color};
  display: inline-block;
  position: absolute;
  height: 3px;
  width: 100%;
  left: 2px;
  bottom: 1px;
  box-sizing: content-box;
  z-index: 1;
`

const RawPercentage = styled.div`
  font-size: 30px;
  font-family: Roboto;
  font-weight: 300;
  line-height: 39px;
  text-align: center;
`


// Component
class FlagChart extends React.Component {
  static propTypes = {
    selectedPhrase: phraseType,
  }

  render() {
    const { selectedPhrase } = this.props
    const {
      dCount,
      rCount
    } = selectedPhrase
    const totalCount = Math.max(1, dCount + rCount)
    const dPercent = Math.round(100 * dCount / totalCount)
    const rPercent = Math.round(100 * rCount / totalCount)

    return (
      <>
        <Wrapper>
          <PercentageRow>
            <PercentageBox>
              <RawPercentage>
                {dPercent}%
              </RawPercentage>
              <BoxDescription>
                <PartyName>
                  <PartyNameText>
                    Democratic
                  </PartyNameText>
                  <PartyNameBackground
                    color="#6EB6EA"
                  />
                </PartyName>
                Speaker
              </BoxDescription>
            </PercentageBox>
            <PercentageBox>
              <RawPercentage>
                {rPercent}%
              </RawPercentage>
              <BoxDescription>
                <PartyName>
                  <PartyNameText>
                    Republican
                  </PartyNameText>
                  <PartyNameBackground
                    color="#DA696C"
                  />
                </PartyName>
                Speaker
              </BoxDescription>
            </PercentageBox>
          </PercentageRow>
        </Wrapper>
      </>
    )
  }
}

export default FlagChart
