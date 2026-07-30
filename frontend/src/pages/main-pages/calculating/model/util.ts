export const moneyToString = (money: number) => {
    return new Intl.NumberFormat("en-US").format(money);
  };