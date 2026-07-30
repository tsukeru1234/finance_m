import PieChartComponent from "../../../../../widget/Chart/PieChartComponent";
import type { category } from "../mouth-budget-widget/test-data";
import "./spend-graph-widget.css";

type SpendGraphWidgetProps = {
  categoryListData: category[];
};

const SpendGraphWidget = ({ categoryListData }: SpendGraphWidgetProps) => {
  return (
    <div className="spend-graph-widget-main-box">
      <span className="spend-graph-title">Spend graph</span>
      <div className="spend-graph-graph">
        <PieChartComponent
          data={categoryListData}
          dataKey="cost"
          nameKey="title"
        />
      </div>
    </div>
  );
};

export default SpendGraphWidget;
