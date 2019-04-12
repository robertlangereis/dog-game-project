export default selectOption = (event) => {
  if (event.keyCode === 49 || event.keyCode === 97) {
    const key = this.locState[0]
    key === this.props.dogWinnerImage.dogWinner ? this.nextIfRight() : this.nextIfWrong()
  } else if (event.keyCode === 50 || event.keyCode === 98) {
    const key = this.locState[1]
    key === this.props.dogWinnerImage.dogWinner ? this.nextIfRight() : this.nextIfWrong()
  } else if (event.keyCode === 51 || event.keyCode === 99) {
    const key = this.locState[2]
    key === this.props.dogWinnerImage.dogWinner ? this.nextIfRight() : this.nextIfWrong()
  }
}