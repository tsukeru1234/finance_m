import { atom } from "jotai";
import { budgetDataDB } from "./budget_test_data";
import { categoryDB } from "./category_test_data";

export type categoryGraphData = {
  id: string;
  user_id: string;
  title: string;
  days: number;
  full_cost: number;
  fill: string;
};

export const CalculationPageData = atom((get) => {
  const budgetData = get(budgetDataDB);
  const activeCategories = get(categoryDB).filter((item) => item.active_status);
  const activeRatioCategories = activeCategories.filter((item) => item.ratio);
  const activeNoRatioCategories = activeCategories.filter(
    (item) => !item.ratio,
  );
  const getRatio = (budget: number) => {
    const SumRatioCategories = (List: categoryDB[]) => {
      if (List.length === 0) return 0;
      const noRatioCategoriesCosts = List.map(
        (item) => budgetData.period * (item.priority * 0.05) * item.cost,
      );
      return noRatioCategoriesCosts.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      );
    };
    const ratio = () => {
      const ratioSum = SumRatioCategories(activeRatioCategories);
      const fixedRatioSum = SumRatioCategories(activeNoRatioCategories);

      const numerator = budget - fixedRatioSum;
      const denominator = ratioSum > 0 ? ratioSum : numerator;

      return numerator / denominator;
    };
    return ratio();
  };
  const ratio = getRatio(budgetData.usable_budget);
  const category_graph_data: categoryGraphData[] = activeCategories.map(
    (item) => {
      const costDays = Math.round(budgetData.period * (item.priority * 0.05));
      return {
        id: item.id,
        user_id: item.user_id,
        title: item.title,
        days: costDays,
        full_cost: item.ratio
          ? Math.round(costDays * (item.cost * ratio))
          : Math.round(costDays * item.cost),
        fill: item.fill,
      };
    },
  );

  return {
    ...budgetData,
    category_graph_data: category_graph_data,
    category_ratio: ratio,
  };
});
