export default class Wallet {
  constructor(money) {
    let _money = money;
    this.getWalletValue = () => {
      return _money;
    }
    this.checkCanPlay = bidValue => {
      if (bidValue > _money) {
        return false
      } else {
        return true
      }
    }
    this.changeWallet = (value, type) => {
      if (typeof value === 'number' && !isNaN(value)) {
        if (type === '+') {
          _money += value;
        } else if (type === '-') {
          _money -= value;
        } else {
          throw new Error('Program przyjmuje jedynie 2 operatory + i -')
        }
      } else {
        throw new Error('Podana wartość nie jest typem number lub jest NaN')
      }
    }
  }
}