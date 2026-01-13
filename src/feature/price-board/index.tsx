// pages/PriceBoard.tsx (hoặc component chính)
import TourGuide from "@/components/feature/tour/TourGuide";

const tourSteps = [
  {
    element: "#test1",
    popover: {
      title: "Bước 1",
      description: "Xin chào! Đây là phần đầu tiên.",
    },
  },
  {
    element: "#test2",
    popover: {
      title: "Bước 2",
      description: "Mình giải thích tiếp ở bước này nhé.",
    },
  },
  {
    element: "#test3",
    popover: {
      title: "Bước 3",
      description: "Đây là bước cuối cùng rồi bạn nhé.",
    },
  },
];

export default function PriceBoard() {
  return (
    <div>
      PriceBoard
      <TourGuide steps={tourSteps} isOpen={true} />
    </div>
  );
}
