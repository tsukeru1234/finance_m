import BarChartComponent from "../../../../../widget/Chart/BarChartComponent";
import type { saveHistory } from "../mouth-budget-widget/test-data";
import "./save-history-widget.css";

type SaveHistoryWidgetProps = {
  historyData: saveHistory[];
};

const SaveHistoryWidget = ({ historyData }: SaveHistoryWidgetProps) => {
  return (
    <div className="save-history-main-box">
      <span className="money-save-history-title">Save history</span>
      <div className="money-save-history-graph-box">
        <BarChartComponent data={historyData} xAxis="date" yAxis="value" />
      </div>
    </div>
  );
};

export default SaveHistoryWidget;
