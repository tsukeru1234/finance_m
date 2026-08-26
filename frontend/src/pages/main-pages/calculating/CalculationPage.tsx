import "./calculation-page.css";
import { useState } from "react";
import MoneyWidget from "./ui/mouth-budget-widget/MoneyWidget";
import MiniCalendar from "../../../widget/calendar/MiniCalendar";
import ChooseCategoryWidget from "./ui/choose-category-widget/ChooseCategoryWidget";
import SaveHistoryWidget from "./ui/save-history-widget/SaveHistoryWidget";
import SpendGraphWidget from "./ui/spend-graph-widget/SpendGraphWidget";
import { useAtomValue } from "jotai";
import { activeCategoryList } from "../test-categories-data";
import { historySave, type calculationData } from "../test-data";
import { navStatus } from "../../../widget/nav-bar/model/storage";
import Button from "../../../shared/ui/button/Button";
import { Link } from "@tanstack/react-router";

const CalculationPage = () => {
  const navS = useAtomValue(navStatus);
  const categories = useAtomValue(activeCategoryList);
  const [calculating, setCalculating] = useState<calculationData>({
    totalBudget: { value: 70000, lastValue: 0.0 },
    totalSaved: 20000,
    canExpenses: 50000,
    saveMoney: { value: 20000, lastValue: 100.0 },
  });

  const event = {
    "2026-07-30": {
      label: "зп",
      action: () => {
        setCalculating((prev) => ({
          ...prev,
          totalBudget: { ...prev.totalBudget, value: 10000 },
        }));
      },
    },
    "2026-07-31": {
      label: "зп2",
      action: () => {
        setCalculating((prev) => ({
          ...prev,
          totalBudget: { ...prev.totalBudget, value: 70000 },
        }));
      },
    },
  };
  return (
    <>
      <div className="budget-box">
        <MoneyWidget
          title="Mouth budget"
          value={calculating.totalBudget.value}
          havLastValue
          lastValue={calculating.totalBudget.lastValue}
          navKey={navS}
        />
      </div>
      <div className="can-spend-box">
        <MoneyWidget
          title="Can expenses"
          value={calculating.canExpenses}
          havLastValue={false}
          navKey={navS}
        />
      </div>
      <div className="mouth-saved-box">
        <MoneyWidget
          title="Want save"
          value={calculating.saveMoney.value}
          havLastValue
          lastValue={calculating.saveMoney.lastValue}
          navKey={navS}
        />
      </div>
      <div className="total-saved-box">
        <MoneyWidget
          title="Total saved"
          value={calculating.totalSaved}
          havLastValue={false}
          navKey={navS}
        />
      </div>
      <div className="money-save-history-box">
        <SaveHistoryWidget historyData={historySave} navKey={navS} />
      </div>
      <div className="calendar-box">
        <MiniCalendar dates={event} navKey={navS} />
        <div
          className="mini-calendar-button-link-box nav-status-hide-page"
          key={navS ? "yes" : "no"}
        >
          <Button style="secondary" type="button" size="small">
            <Link from={"/"} to={"main-pages/calendar"} className="none-link">
              Show my spend calendar
            </Link>
          </Button>
        </div>
      </div>
      <div className="take-categories-box">
        <ChooseCategoryWidget categoryList={categories} navKey={navS} />
      </div>
      <div className="spend-graph-box">
        <SpendGraphWidget categoryListData={categories} navKey={navS} />
      </div>
    </>
  );
};

export default CalculationPage;
