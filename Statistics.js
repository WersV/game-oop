export default class Statistics {
  constructor() {
    this.gameResults = [];
  }
  addGameToStatistics(win, bid) {
    const newGame = {
      win,
      bid
    }
    this.gameResults.push(newGame);
  }
  showGameStatistics() {
    const games = this.gameResults.length;
    let wins = this.gameResults.filter(result => result.win === true).length;
    let loses = games - wins;
    return [games, wins, loses];
  }
}