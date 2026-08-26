import BarChartComponent from "../../../../../widget/Chart/BarChartComponent";
import type { saveHistory } from "../../../test-data";
import "./save-history-widget.css";

type SaveHistoryWidgetProps = {
  historyData: saveHistory[];
  navKey: boolean
};

const SaveHistoryWidget = ({ historyData, navKey }: SaveHistoryWidgetProps) => {
  return (
    <div className="save-history-main-box nav-status-hide-page" key={navKey? "yes" : "no"}>
      <span className="money-save-history-title">Save history</span>
      <div className="money-save-history-graph-box">
        <BarChartComponent data={historyData} xAxis="date" yAxis="value" />
      </div>
    </div>
  );
};

export default SaveHistoryWidget;
