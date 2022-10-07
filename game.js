// link do gry: https://websamuraj.pl/examples/js/gra/ 

import Wallet from './Wallet.js';
import Statistics from './Statistics.js';

const wallet = new Wallet(100);
const statistics = new Statistics();

wallet.changeWallet(10, '+');
wallet.getWalletValue();

statistics.showGameStatistics();
// console.log(statistics.gameResults);