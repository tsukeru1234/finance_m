import { atom } from "jotai";

type budgetDataInput = {
  budget: number;
  save: number;
  period: number;
};

type budgetDataDB = {
  id: string;
  user_id: string;
  budget: number;
  save: number;
  period: number;
  usable_budget: number;
};

export const budgetDataDB = atom<budgetDataDB>({
  id: "1",
  user_id: "1",
  budget: 38500,
  save: 5000,
  period: 19,
  usable_budget: 33500,
});

export const setBudget = atom(
  null,
  (get, set, budgetInput: budgetDataInput) => {
    const oldBudget = get(budgetDataDB);
    const newBudget = {
      ...oldBudget,
      ...budgetInput,
      usable_budget: budgetInput.budget - budgetInput.save,
    };
    set(budgetDataDB, newBudget);
  },
);
