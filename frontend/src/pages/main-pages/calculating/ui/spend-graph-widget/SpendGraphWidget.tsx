import type { categoryGraphData } from "../../../../../test_data/calculation_page_test_data";
import PieChartComponent from "../../../../../widget/Chart/PieChartComponent";
import "./spend-graph-widget.css";

type SpendGraphWidgetProps = {
  categoryListData: categoryGraphData[];
  navKey: boolean,
  ratio: number
};

const SpendGraphWidget = ({ categoryListData, navKey, ratio }: SpendGraphWidgetProps) => {
  console.log('SpendGraphWidget data:', categoryListData);
  return (
    <div className="spend-graph-widget-main-box nav-status-hide-page" key={navKey? "yes" : "no"}>
      <span className="spend-graph-title">Spend graph {ratio.toFixed(2)}</span>
      <div className="spend-graph-graph">
        <PieChartComponent
          data={categoryListData}
          dataKey="full_cost"
          nameKey="title"
        />
      </div>

    </div>
  );
};

export default SpendGraphWidget;
