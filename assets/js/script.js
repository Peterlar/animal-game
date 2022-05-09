/**Const declaration for function variables */
const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')



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

  /** Showing winner */
function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
  }
  
  /**Determing the winner */
function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
  }

  /**Getting a random selectionn when clicking emoji buttons */
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
  }

  /**Showing rules when pressing game-rules button */
function myFunction() {
    document.getElementById("rules").innerHTML = "Snake 🐍 Beats 🐻 Bear";
    document.getElementById("rules2").innerHTML = "Bear 🐻 Beats 🦅 Falcon";
    document.getElementById("rules3").innerHTML = "Falcon 🦅 Beats 🐍 Snake";
  }