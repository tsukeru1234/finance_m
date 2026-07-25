import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./style//bar-tooltip-style.css";

type PieChartComponentProps<I extends { id: string }> = {
  data: I[];
  dataKey: keyof I;
  nameKey: keyof I;
};

const PieChartComponent = <I extends { id: string }>({
  data,
  dataKey,
  nameKey,
}: PieChartComponentProps<I>) => {
  return (
    <ResponsiveContainer width="100%">
      <PieChart data={data}>
        <Pie
          paddingAngle={4}
          activeShape={{ fill: "var(--color-accent-light)" }}
          cornerRadius={16}
          dataKey={dataKey as string}
          nameKey={nameKey as string}
          innerRadius="65%"
          outerRadius="95%"
          stroke="color-mix(in srgb, var(--color-secondary-light) 20%, transparent)"
          strokeWidth={4}
          stopOpacity={24}
        >
          <Legend
            align="left"
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={{
              boxSizing: "border-box",
              backgroundColor: "var(--color-primary)",
              padding: "var(--space-xs) var(--space-md)",
              borderRadius: "var(--space-lg)",
              boxShadow: "var(--border-md) var(--border-md) var(--border-lg) color-mix(in srgb, var(--color-secondary-dark) 40%, transparent)",
              maxHeight: "70%",
              overflowY: "auto"
            }}

            labelStyle={{
              display: "inline-flex",
              alignItems: "center",
              color: "var(--color-neutral-dark)",
              fontSize: "var(--font-small)",
              letterSpacing: "var(--small-text-letter-spacing)",
              lineHeight: "var(--font-medium)",
              verticalAlign: "middle",
              marginLeft: "var(--space-md)",
            }}
            iconType="wye"
            iconSize={24}
          />
        </Pie>
        <Tooltip
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
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
