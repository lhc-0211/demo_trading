import PriceBoardPage from "@/pages/PriceBoardPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: () => <PriceBoardPage />,
});
