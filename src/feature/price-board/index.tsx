import ChartIndex from "./components/chart-index";

export default function PriceBoard() {
  return (
    <div className="flex flex-col items-center h-full gap-1">
      <ChartIndex />
      <div className="flex-1 bg-card w-full h-full"></div>
    </div>
  );
}
