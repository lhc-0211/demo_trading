import { lazy } from "react";

const PriceBoard = lazy(() => import("@/feature/price-board"));

export default function PriceBoardPage() {
  return <PriceBoard />;
}
