import { atom } from "jotai";

export type category = {
  id: string;
  title: string;
  cost: number;
  fill: string;
  priority: number;
  status: boolean;
};

type UpdateCategoryStatus = (
  oldActiveList: category[],
  oldInactiveList: category[],
  categoryId: string,
) =>
  | {
      newActiveCategoryList: category[];
      newInactiveCategoryList: category[];
    }
  | undefined;

const ActiveCategoryListStrategy: UpdateCategoryStatus = (
  oldActiveList: category[],
  oldInactiveList: category[],
  categoryId: string,
) => {
  const targetItem = oldActiveList.find((item) => item.id === categoryId);
  if (!targetItem) {
    console.log("error");
    return;
  }
  const newActiveList = oldActiveList.filter((item) => item.id !== categoryId);
  const updateTarget = {...targetItem, status: false}
  const newInactiveList = [...oldInactiveList, updateTarget];
  return {
    newActiveCategoryList: newActiveList,
    newInactiveCategoryList: newInactiveList,
  };
};
const InactiveCategoryStrategy: UpdateCategoryStatus = (
  oldActiveList: category[],
  oldInactiveList: category[],
  categoryId: string,
) => {
  const targetItem = oldInactiveList.find((item) => item.id === categoryId);
  if (!targetItem) {
    console.log("error");
    return;
  }
  const newInactiveList = oldInactiveList.filter(
    (item) => item.id !== categoryId,
  );
  const updateTarget = {...targetItem, status: true}
  const newActiveList = [...oldActiveList, updateTarget];
  return {
    newActiveCategoryList: newActiveList,
    newInactiveCategoryList: newInactiveList,
  };
};

const statusStrategies: Record<"active" | "inactive", UpdateCategoryStatus> = {
  active: ActiveCategoryListStrategy,
  inactive: InactiveCategoryStrategy,
};

export const activeCategoryList = atom([
  {
    id: "1a",
    title: "Food",
    cost: 800,
    fill: "#17b619",
    priority: 1,
    status: true,
  },
  {
    id: "2b",
    title: "Sex",
    cost: 600,
    fill: "#d61f1f",
    priority: 2,
    status: true,
  },
]);

export const inactiveCategoryList = atom([
  {
    id: "3c",
    title: "Don't now",
    cost: 2000,
    fill: "#ba19eb",
    priority: 20,
    status: false,
  },
  {
    id: "4n",
    title: "Hex",
    cost: 7200,
    fill: "#1fd6c7",
    priority: 10,
    status: false,
  },
]);

export const refreshCategoryStatus = atom(
  null,
  (get, set, categoryId: string, whatList: "active" | "inactive") => {
    const oldInactiveList: category[] = get(inactiveCategoryList);
    const oldActiveList: category[] = get(activeCategoryList);
    const getNewLists = statusStrategies[whatList];
    const newLists = getNewLists(oldActiveList, oldInactiveList, categoryId);
    if (!newLists) {
      console.log("error");
      return;
    }
    set(inactiveCategoryList, newLists.newInactiveCategoryList);
    set(activeCategoryList, newLists.newActiveCategoryList);
  },
);
