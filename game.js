// link do gry: https://websamuraj.pl/examples/js/gra/ 

import Wallet from './Wallet.js';
import Statistics from './Statistics.js';
import Draw from './Draw.js';
import Result from './Result.js';

// const wallet = new Wallet(100);
// const statistics = new Statistics();

// wallet.changeWallet(10, '+');

// statistics.showGameStatistics();

// draw.getDrawResult();

export default class Game {
  constructor(start) {
    this.wallet = new Wallet(start);
    this.statistics = new Statistics();
    document.getElementById('start').addEventListener('click', () => this.startGame());
    this.boards = document.querySelectorAll('.color');
    this.bidInput = document.getElementById('bid')
    this.walletSpan = document.querySelector('.wallet');
    this.scoreResult = document.querySelector('.result');
    this.numberSpan = document.querySelector('.number');
    this.winSpan = document.querySelector('.win');
    this.lossSpan = document.querySelector('.loss');
    this.render();
  }

  render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
    this.boards.forEach((board, index) => {
      board.style.backgroundColor = colors[index];
    })

    if (result) {
      result = `Wygrałeś $${wonMoney}`
    } else if (!result && result !== "") {
      result = `Przegrałeś $${bid}`
    }

    stats = this.statistics.showGameStatistics();
    this.walletSpan.textContent = money;
    this.scoreResult.textContent = result;
    this.numberSpan.textContent = stats[0];
    this.winSpan.textContent = stats[1];
    this.lossSpan.textContent = stats[2];
  }
  startGame() {
    const draw = new Draw();
    if (this.bidInput.value < 1) return alert('Zakłady zaczynają się od $1')
    const bid = Math.floor(this.bidInput.value);
    if (!this.wallet.checkCanPlay(bid)) return alert('Niewystarczająca liczba środków');
    this.wallet.changeWallet(bid, '-');
    const colors = draw.getDrawResult();
    const result = Result.checkWinner(colors);
    const wonMoney = Result.moneyWinInGame(result, bid);
    if (result) this.wallet.changeWallet(wonMoney, '+');
    const money = this.wallet.getWalletValue();
    this.statistics.addGameToStatistics(result, bid);
    const stats = this.statistics.showGameStatistics();
    console.log(colors);
    this.render(colors, money, result, stats, bid, wonMoney);
    this.bidInput.value = "";
  }
}

//metoda render kasowanie stawki, wyswielnie srodkow ile gier czy wygeral przegral
// metoda start game wszystko bedzie robic po kliekcniu przycisku zakrec