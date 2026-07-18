import SaveMoneyGraph from "../features/history/save-money/SaveMoneyGraph";
import List from "../features/List";
import "./style/calculation-page.css";

type calculationData = {
  totalBudget: { value: number; lastValue: number };
  totalSaved: number;
  canExpenses: number;
  saveMoney: { value: number; lastValue: number };
};

type category = {
  id: string;
  title: string;
  cost: number;
};

export type saveHistory = {
  date: string;
  value: number;
};

const CalculationPage = () => {
  const valueType = "₽";
  const calculating: calculationData = {
    totalBudget: { value: 70000, lastValue: 0.0 },
    totalSaved: 20000,
    canExpenses: 50000,
    saveMoney: { value: 20000, lastValue: 100.0 },
  };
  const categoryList: category[] = [
    { id: "food", title: "Food", cost: 500 },
    { id: "sex", title: "Sex", cost: 9500 },
  ];
  const historySave: saveHistory[] = [
    { date: "08-06-2025", value: 10000 },
    { date: "08-07-2025", value: 30000 },
    { date: "08-08-2025", value: 10000 },
    { date: "08-09-2025", value: 50000 },
    { date: "08-10-2025", value: 10000 },
    { date: "08-11-2025", value: 100000 },
  ];
  const moneyToString = (money: number) => {
    return new Intl.NumberFormat("en-US").format(money);
  };
  return (
    <>
      <div className="budget-box">
        <span className="box-title">Mouth budget</span>
        <div className="money-box">
          <span className="money-number">
            {moneyToString(calculating.totalBudget.value)}
            {valueType}
          </span>
          <span
            className={`money-last-mouth-percent ${calculating.totalBudget.lastValue > 0 ? "money-last-mouth-percent-good" : calculating.totalBudget.lastValue < 0 ? "money-last-mouth-percent-bad" : ""}`}
          >
            {calculating.totalBudget.lastValue > 0
              ? "+"
              : calculating.totalBudget.lastValue < 0
                ? "+"
                : ""}{" "}
            {calculating.totalBudget.lastValue.toFixed(2)}% from last mouth
          </span>
        </div>
      </div>
      <div className="can-spend-box">
        <span className="box-title">Can expenses</span>
        <div className="money-box">
          <span className="money-number">
            {moneyToString(calculating.canExpenses)}
            {valueType}
          </span>
          {/* <span className="money-last-mouth-percent">0,00% from last mouth</span> */}
        </div>
      </div>
      <div className="mouth-saved-box">
        <span className="box-title">Want save</span>
        <div className="money-box">
          <span className="money-number">
            {moneyToString(calculating.saveMoney.value)}
            {valueType}
          </span>
          <span
            className={`money-last-mouth-percent ${calculating.saveMoney.lastValue > 0 ? "money-last-mouth-percent-good" : calculating.saveMoney.lastValue < 0 ? "money-last-mouth-percent-bad" : ""}`}
          >
            {calculating.saveMoney.lastValue > 0
              ? "+"
              : calculating.saveMoney.lastValue < 0
                ? "+"
                : ""}{" "}
            {calculating.saveMoney.lastValue.toFixed(2)}% from last mouth
          </span>
          {/* <span className="money-last-mouth-percent">0,00% from last mouth</span> */}
        </div>
      </div>
      <div className="total-saved-box">
        <span className="box-title">Total saved</span>
        <div className="money-box">
          <span className="money-number">
            {moneyToString(calculating.totalSaved)}
            {valueType}
          </span>
        </div>
      </div>
      <div className="money-save-history-box">
        <span>Save history</span>
        <SaveMoneyGraph data={historySave} />
      </div>
      <div className="calendar-box">
        <span>Calendar</span>
      </div>
      <div className="take-categories-box">
        <span className="box-title">Choose categories</span>
        <div className="categories-list">
          <List
            data={categoryList}
            render={(item: category) => (
              <div className="category-box">
                <span className="category-title">{item.title}</span>
                <span className="category-number">
                  {moneyToString(item.cost)} {valueType}
                </span>
              </div>
            )}
          ></List>
        </div>
      </div>
      <div className="spend-graph-box">
        <span>Expenses graph</span>
      </div>
    </>
  );
};

export default CalculationPage;
