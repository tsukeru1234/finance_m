import "./calculation-page.css";
import MoneyWidget from "./ui/mouth-budget-widget/MoneyWidget";
import MiniCalendar from "../../../widget/calendar/MiniCalendar";
import ChooseCategoryWidget from "./ui/choose-category-widget/ChooseCategoryWidget";
import SaveHistoryWidget from "./ui/save-history-widget/SaveHistoryWidget";
import SpendGraphWidget from "./ui/spend-graph-widget/SpendGraphWidget";
import { useAtomValue } from "jotai";
import { activeCategoryList } from "../test-categories-data";
import { historySave } from "../test-data";
import { navStatus } from "../../../widget/nav-bar/model/storage";
import Button from "../../../shared/ui/button/Button";
import { Link } from "@tanstack/react-router";
import { CalculationPageData } from "../../../test_data/calculation_page_test_data";

const CalculationPage = () => {
  const calculationPageData = useAtomValue(CalculationPageData)
  const navS = useAtomValue(navStatus);
  const categories = useAtomValue(activeCategoryList);

  const event = {
    "2026-07-30": {
      label: "зп",
      action: () => {
        
      },
    },
    "2026-07-31": {
      label: "зп2",
      action: () => {
        
      },
    },
  };
  return (
    <>
      <div className="budget-box">
        <MoneyWidget
          title="Mouth budget"
          value={calculationPageData.budget}
          havLastValue
          lastValue={0}
          navKey={navS}
        />
      </div>
      <div className="can-spend-box">
        <MoneyWidget
          title="Can expenses"
          value={calculationPageData.usable_budget}
          havLastValue={false}
          navKey={navS}
        />
      </div>
      <div className="mouth-saved-box">
        <MoneyWidget
          title="Want save"
          value={calculationPageData.save}
          havLastValue
          lastValue={0}
          navKey={navS}
        />
      </div>
      <div className="total-saved-box">
        <MoneyWidget
          title="Total saved"
          value={0}
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
        <SpendGraphWidget categoryListData={calculationPageData.category_graph_data} navKey={navS} ratio={calculationPageData.category_ratio}/>
      </div>
    </>
  );
};

export default CalculationPage;
