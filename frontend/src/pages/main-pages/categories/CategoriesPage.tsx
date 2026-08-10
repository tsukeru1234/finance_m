import { useAtomValue, useSetAtom } from "jotai";
import List from "../../../features/List";
import {
  activeCategoryList,
  inactiveCategoryList,
  refreshCategoryStatus,
  type category,
} from "../test-categories-data";
import "./categories-page.css";

const CategoriesPage = () => {
  const categories = useAtomValue(activeCategoryList);
  const inactiveCategories = useAtomValue(inactiveCategoryList);
  const updateStatus = useSetAtom(refreshCategoryStatus);
  const activeSorted = [...categories].sort((a, b) => a.priority - b.priority);
  const inactiveSorted = [...inactiveCategories].sort(
    (a, b) => a.priority - b.priority,
  );
  return (
    <>
      <div className="active-categories">
        <span className="categories-title">
          Active categories {activeSorted.length}
        </span>
        <div className="active-categories-list">
          <List
            data={activeSorted}
            render={(item: category) => (
              <button
                onClick={() => updateStatus(item.id, "active")}
                className="active-category-list-item"
                style={
                  {
                    "--color-category-fill": item.fill,
                  } as React.CSSProperties
                }
              >
                <div className="active-category-list-item-line"></div>
                <div className="active-category-list-item-info-block">
                  <span className="active-category-list-item-title">
                    {item.title}
                  </span>
                  <span className="active-category-list-item-cost">
                    {item.cost}
                  </span>
                  <span className="active-category-list-item-priority">
                    {item.priority}
                  </span>
                </div>
              </button>
            )}
          />
        </div>
      </div>
      <div className="my-categories">
        <span className="categories-title">My categories</span>
        <div className="my-categories-list">
          <List
            data={inactiveSorted}
            render={(item: category) => (
              <button
                onClick={() => updateStatus(item.id, "inactive")}
                className="my-category-list-item"
                style={
                  {
                    "--color-category-fill": item.fill,
                  } as React.CSSProperties
                }
              >
                <span className="my-category-list-item-title">
                  {item.title}
                </span>
                <span className="my-category-list-item-cost">{item.cost}</span>
                <span className="my-category-list-item-priority">
                  {item.priority}
                </span>
                <div className="my-category-list-item-color-line"><span className="my-category-list-item-color-line-hover-title">activate</span></div>
              </button>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default CategoriesPage;
