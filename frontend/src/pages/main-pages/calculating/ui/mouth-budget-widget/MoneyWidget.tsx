import { useAtom } from "jotai";
import { moneyToString } from "../../model/util";
import "./money-widget.css";
import { moneyType } from "../../model/data";

type MoneyWidgetProps = {
  navKey: boolean;
  title: string;
  value: number;
  havLastValue: boolean;
  lastValue?: number;
};

const MoneyWidget = ({
  title,
  value,
  havLastValue,
  lastValue,
  navKey,
}: MoneyWidgetProps) => {
  const [valueType] = useAtom(moneyType);
  return (
    <div className="money-main-box nav-status-hide-page" key={navKey? "yes" : "no"}>
      <span className="money-box-title">{title}</span>
      <div className="money-box">
        <span className="money-number">
          {moneyToString(value)}
          {valueType}
        </span>
        {lastValue !== undefined && havLastValue ? (
          <span
            className={`money-last-mouth-percent ${lastValue > 0 ? "money-last-mouth-percent-good" : lastValue < 0 ? "money-last-mouth-percent-bad" : ""}`}
          >
            {lastValue > 0 ? "+" : lastValue < 0 ? "-" : ""}{" "}
            {lastValue.toFixed(2)}% from last mouth
          </span>
        ) : (
          <span className="money-last-mouth-percent-null-box"></span>
        )}
      </div>
    </div>
  );
};

export default MoneyWidget;
