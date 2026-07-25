import { createFileRoute } from "@tanstack/react-router";
import  CalculationPage  from "../pages/main-pages/calculating/CalculationPage";

export const Route = createFileRoute("/main-pages/calculation")({
  component: () => <CalculationPage />,
});

