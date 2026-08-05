import { useAtom } from "jotai";
import List from "../../../../../features/List";
import { moneyToString } from "../../model/util";
import "./coose-category-widget.css";
import { moneyType } from "../../model/data";
import type { category } from "../../../test-data";

type ChooseCategoryWidgetProps = {
  categoryList: category[];
};

const ChooseCategoryWidget = ({ categoryList }: ChooseCategoryWidgetProps) => {
  const [valueType] = useAtom(moneyType);
  return (
    <div className="choose-categories-main-box">
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
    </div>
  );
};

export default ChooseCategoryWidget;
