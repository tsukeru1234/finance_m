import PieChartComponent from "../../../../../widget/Chart/PieChartComponent";
import type { category } from "../../../test-categories-data";
import "./spend-graph-widget.css";

type SpendGraphWidgetProps = {
  categoryListData: category[];
  navKey: boolean
};

const SpendGraphWidget = ({ categoryListData, navKey }: SpendGraphWidgetProps) => {
  return (
    <div className="spend-graph-widget-main-box nav-status-hide-page" key={navKey? "yes" : "no"}>
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
