import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { saveHistory } from "../../../pages/CalculationPage";
import "./save-money-history-tooltip.css";

type saveMoneyGraphProps = {
  data: saveHistory[];
};

const SaveMoneyGraph = ({ data }: saveMoneyGraphProps) => {
  return (
    <ResponsiveContainer width="100%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
        barCategoryGap="10%"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tick={{
            fill: "var(--color-accent-dark)",
            fontSize: "var(--font-graph-medium)",
            letterSpacing: "var(--small-text-letter-spacing)",
          }}
        />
        <YAxis
          width="auto"
          tick={{
            fill: "var(--color-accent-dark)",
            fontSize: "var(--font-graph-medium)",
            letterSpacing: "var(--small-text-letter-spacing)",
          }}
        />
        <Tooltip
          cursor={false}
          wrapperClassName="tooltip-wrapped-box-bar"
          contentStyle={{
            borderRadius: "var(--space-md)",
            border: "none",
            boxShadow:
              "var(--border-md) var(--border-md) var(--border-lg) color-mix(in srgb, var(--color-secondary-dark) 20%, transparent)",
          }}
          labelClassName="tooltip-content-bar-label"
          itemStyle={{
            color: "var(--color-accent-dark)",
            fontSize: "var(--font-small)",
            letterSpacing: "var(--small-text-letter-spacing)",
          }}
        />
        <Bar
          dataKey="value"
          fill="#489ac7"
          activeBar={{ fill: "#2363a8", stroke: "#c0d3ed" }}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SaveMoneyGraph;
