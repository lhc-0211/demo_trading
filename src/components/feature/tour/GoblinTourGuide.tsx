import GoblinBuilder from "@/assets/support/Goblin-Builder.png";
import { driver, type Driver } from "driver.js";
import { useEffect, useRef } from "react";

interface Popover {
  title: string;
  description: string;
}

interface TourStep {
  element?: string;
  popover: Popover;
}

interface TourGuideProps {
  steps: TourStep[];
  isOpen?: boolean; // true tự động chạy tour khi mount
  onClose?: () => void; // callback khi tour kết thúc / bị hủy
  doneBtnText?: string;
  popoverClass?: string;
  stagePadding?: number;
}

export default function GoblinTourGuide({
  steps,
  isOpen = false,
  onClose,
  doneBtnText = "Kết thúc",
  popoverClass = "avatar-gobil",
  stagePadding = 0,
}: TourGuideProps) {
  const avatarRef = useRef<HTMLImageElement | null>(null);
  const driverRef = useRef<Driver | null>(null);

  // Tạo avatar (Master Builder)
  useEffect(() => {
    const img = document.createElement("img");
    img.src = GoblinBuilder;
    img.alt = "goblin guide";
    img.id = "goblin-avatar";

    img.style.cssText = `
      position: fixed;
      bottom: 10px;
      left: 40px;
      height: clamp(180px, 30vh, 420px);
      width: auto;
      z-index: 10001;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s ease;
      object-fit: cover;
      animation: breathing 3s ease-in-out infinite;
    `;

    document.body.appendChild(img);
    avatarRef.current = img;

    return () => {
      img.remove();
      avatarRef.current = null;
    };
  }, []);

  useEffect(() => {
    driverRef.current = driver({
      showProgress: true,
      allowClose: false,
      popoverClass,
      stagePadding,
      prevBtnText:
        '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
      nextBtnText:
        '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
      doneBtnText:
        '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',

      onPopoverRender: () => {
        if (avatarRef.current) {
          avatarRef.current.style.opacity = "1";
        }
      },

      onDestroyed: () => {
        if (avatarRef.current) avatarRef.current.style.opacity = "0";
        onClose?.();
      },

      steps: steps.map((step) => ({
        ...step,
        popover: {
          ...step.popover,
          side: "right",
          align: "start",
        },
      })),
    });

    return () => {
      driverRef.current?.destroy();
      driverRef.current = null;
    };
  }, [steps, doneBtnText, popoverClass, onClose]);

  useEffect(() => {
    if (isOpen && driverRef.current && avatarRef.current) {
      setTimeout(() => driverRef.current?.drive(), 300); // tăng delay cho mobile
    } else if (!isOpen && driverRef.current) {
      driverRef.current?.destroy();
    }
  }, [isOpen]);

  return null;
}
