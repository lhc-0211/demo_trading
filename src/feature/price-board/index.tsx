import ChartIndex from "./components/chart-index";
import NavigationMenuPriceBoard from "./components/nav-menu";

export default function PriceBoard() {
  return (
    <div className="flex flex-col md:gap-4 gap-2">
      {/* Thông tin index */}
      <div className="flex h-32 md:h-40 gap-2">
        <div className="flex-1 min-w-0 overflow-hidden">
          <ChartIndex />
        </div>
        <div className="bg-card w-1/3 rounded xl:block hidden"></div>
      </div>

      {/* Menu bảng giá */}
      <div className="">
        <NavigationMenuPriceBoard />
      </div>
    </div>
  );
}
