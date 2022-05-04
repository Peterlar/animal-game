/**Buttons selection */
const SELECTIONS = [
    {
      name: 'snake',
      emoji: '🐍',
      beats: 'bear'
    },
    {
      name: 'bear',
      emoji: '🐻 ',
      beats: 'falcon'
    },
    {
      name: 'falcon',
      emoji: '🦅',
      beats: 'snake'
    }
  ]

/**Emoji buttons */
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
      const selectionName = selectionButton.dataset.selection
      const selection = SELECTIONS.find(selection => selection.name === selectionName)
      makeSelection(selection)
    })
  })

  function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
  
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)
  
    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
  }

  /**Showing score */
function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
  }