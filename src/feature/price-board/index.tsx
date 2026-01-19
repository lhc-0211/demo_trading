import ChartIndex from "./components/chart-index";

export default function PriceBoard() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex h-32 md:h-40 gap-2">
        <div className="flex-1 min-w-0 overflow-hidden">
          <ChartIndex />
        </div>
        <div className="bg-card w-1/3 rounded xl:block hidden"></div>
      </div>
    </div>
  );
}
