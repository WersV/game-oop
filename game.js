// link do gry: https://websamuraj.pl/examples/js/gra/ 

import Wallet from './Wallet.js';
import Statistics from './Statistics.js';
import Draw from './Draw.js';

const wallet = new Wallet(100);
const statistics = new Statistics();
const draw = new Draw();

wallet.changeWallet(10, '+');

statistics.showGameStatistics();

draw.getDrawResult();