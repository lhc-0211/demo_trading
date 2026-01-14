import MasterBuilder from "@/assets/support/Master-Builder.png";
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
}

export default function MasterTourGuide({
  steps,
  isOpen = false,
  onClose,
  doneBtnText = "Kết thúc",
  popoverClass = "avatar-popover",
}: TourGuideProps) {
  const avatarRef = useRef<HTMLImageElement | null>(null);
  const driverRef = useRef<Driver | null>(null);

  // Tạo avatar (Master Builder)
  useEffect(() => {
    const img = document.createElement("img");
    img.src = MasterBuilder;
    img.alt = "Tour guide";

    img.style.cssText = `
      position: fixed;
      bottom: 0;
      right: 12px;
      width: clamp(120px, 25vh, 360px);
      height: clamp(120px, 25vh, 360px);
      z-index: 10001;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;

    document.body.appendChild(img);
    avatarRef.current = img;

    return () => {
      img.remove();
      avatarRef.current = null;
    };
  }, []);

  // Di chuyển popover sát avatar
  const movePopoverToAvatar = () => {
    const avatar = avatarRef.current;
    const popover = document.querySelector(
      `.driver-popover.${popoverClass}`
    ) as HTMLElement | null;

    if (!avatar || !popover) return;

    const avatarRect = avatar.getBoundingClientRect();

    popover.style.position = "fixed";
    popover.style.transform = "none";
    popover.style.left = `${avatarRect.left - popover.offsetWidth + 40}px`;
    popover.style.top = `${avatarRect.top - popover.offsetHeight + 20}px`;
  };

  // Khởi tạo driver
  useEffect(() => {
    driverRef.current = driver({
      showProgress: true,
      allowClose: false,
      popoverClass,
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
        // Đợi DOM update rồi mới move
        setTimeout(movePopoverToAvatar, 0);
      },

      onDestroyed: () => {
        if (avatarRef.current) {
          avatarRef.current.style.opacity = "0";
        }
        onClose?.();
      },

      steps,
    });

    return () => {
      driverRef.current?.destroy();
      driverRef.current = null;
    };
  }, [steps, doneBtnText, popoverClass, onClose]);

  useEffect(() => {
    if (isOpen && driverRef.current) {
      setTimeout(() => {
        driverRef.current?.drive();
      }, 50);
    }
  }, [isOpen]);

  return null;
}
