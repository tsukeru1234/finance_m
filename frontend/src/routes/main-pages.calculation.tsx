import { createFileRoute } from "@tanstack/react-router";
import  CalculationPage  from "../pages/CalculationPage";

export const Route = createFileRoute("/main-pages/calculation")({
  component: () => <CalculationPage />,
});

