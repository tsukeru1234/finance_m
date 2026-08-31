import { createFileRoute } from "@tanstack/react-router";
import TestBudgetWindow from "../test_data/TestBudgetWindow";

export const Route = createFileRoute("/main-pages/tests")({
  component: () => <TestBudgetWindow />,
});
