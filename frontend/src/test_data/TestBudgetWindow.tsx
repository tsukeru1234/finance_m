import { useSetAtom } from "jotai";
import "./test-budget-window-style.css";
import { setBudget } from "./budget_test_data";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

const TestBudgetWindow = () => {
  const changeBudget = useSetAtom(setBudget);
  const [budgetInput, setBudgetInput] = useState({
    budget: 0,
    save: 0,
    period: 0,
  });
  return (
    <div className="test-form-main">
      <input
        type="number"
        value={budgetInput.budget}
        onChange={(e) =>
          setBudgetInput((prev) => ({
            ...prev,
            budget: Number(e.target.value),
          }))
        }
      />
      <input
        type="number"
        value={budgetInput.save}
        onChange={(e) =>
          setBudgetInput((prev) => ({ ...prev, save: Number(e.target.value) }))
        }
      />
      <input
        type="number"
        value={budgetInput.period}
        onChange={(e) =>
          setBudgetInput((prev) => ({
            ...prev,
            period: Number(e.target.value),
          }))
        }
      />
      <button
        onClick={() => {
          changeBudget(budgetInput);
          console.log(budgetInput);
        }}
      >
        save
      </button>
      <Link from={"/"} to ={"/main-pages/calculation"}>home</Link>
    </div>
  );
};

export default TestBudgetWindow;
