import { useAtom } from "jotai";
import List from "../../../../../features/List";
import { moneyToString } from "../../model/util";
import "./choose-category-widget.css";
import { moneyType } from "../../model/data";
import type { category } from "../../../test-categories-data";
import Button from "../../../../../shared/ui/button/Button";
import { Link } from "@tanstack/react-router";

type ChooseCategoryWidgetProps = {
  categoryList: category[];
  navKey: boolean
};

const ChooseCategoryWidget = ({ categoryList, navKey }: ChooseCategoryWidgetProps) => {
  const [valueType] = useAtom(moneyType);
  return (
    <div className="choose-categories-main-box nav-status-hide-page" key={navKey? "yes" : "no"}>
      <span className="box-title">Choose categories</span>
      <div className="categories-list">
        <List
          data={categoryList}
          render={(item: category) => (
            <div className="category-box">
              <span className="category-title">{item.title}</span>
              <span className="category-number">
                {moneyToString(item.cost)} {valueType}
              </span>
            </div>
          )}
        ></List>
      </div>
      <div className="categories-widget-button-box">
        <Button style="secondary" size="small" type="button">
          <Link from={"/"} to={"main-pages/categories"} className="none-link"><span>Redact my category</span></Link>
        </Button>
      </div>
    </div>
  );
};

export default ChooseCategoryWidget;
