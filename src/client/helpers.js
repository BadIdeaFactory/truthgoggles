

// Depending on the nature of a phrase, it will be a different
// color and intensity.
export const calculatePhraseColor = (phrase) => {
  const { dCount, rCount } = phrase
  const totalCount = dCount + rCount
  if(dCount > rCount) {
    return `rgba(110,182,234,${dCount / totalCount})`
  } else {
    return `rgba(218,105,108,${rCount / totalCount})`
  }
}
