import GoblinTourGuide from "@/components/feature/tour/GoblinTourGuide";
import MasterTourGuide from "@/components/feature/tour/MasterTourGuide";
import {
  DEV_INTRO_STEPS,
  HELP_STEPS,
  TOUR_INTRO_STEPS,
  USER_INTRO_STEPS,
} from "@/configs";
import { CircleQuestionMark } from "lucide-react";
import { useEffect, useState } from "react";
import VillagerTourGuide from "./VillagerTourGuide";

export default function TourGuide() {
  const [isOpenGoblin, setIsOpenGoblin] = useState(true);
  const [isOpenMaster, setIsOpenMaster] = useState(false);
  const [isOpenVillager, setIsOpenVillager] = useState(false);
  const [type, setType] = useState<"user" | "dev">("user");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const btnUser = document.getElementById(
        "tour-user"
      ) as HTMLDivElement | null;
      const btnDev = document.getElementById(
        "tour-dev"
      ) as HTMLDivElement | null;

      if (btnUser && !btnUser.dataset.eventAttached) {
        btnUser.onclick = () => {
          setIsOpenGoblin(false);
          // Delay nhỏ để tour cũ destroy hoàn toàn
          setTimeout(() => {
            setType("user");
            setIsOpenMaster(true);
          }, 150); // 150ms thường đủ an toàn
        };
        btnUser.dataset.eventAttached = "true";
      }

      if (btnDev && !btnDev.dataset.eventAttached) {
        btnDev.onclick = () => {
          setIsOpenGoblin(false);
          setTimeout(() => {
            setType("dev");
            setIsOpenMaster(true);
          }, 150);
        };
        btnDev.dataset.eventAttached = "true";
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div
        className="absolute bottom-4 right-4"
        onClick={() => setIsOpenVillager(true)}
      >
        <CircleQuestionMark className="size-4 md:size-6 text-ring hover:text-foreground" />
      </div>

      {isOpenGoblin && (
        <GoblinTourGuide
          steps={TOUR_INTRO_STEPS}
          isOpen={isOpenGoblin}
          onClose={() => setIsOpenGoblin(false)}
          popoverClass="avatar-gobil"
        />
      )}

      {isOpenMaster && (
        <MasterTourGuide
          steps={type === "user" ? USER_INTRO_STEPS : DEV_INTRO_STEPS}
          isOpen={isOpenMaster}
          onClose={() => setIsOpenMaster(false)}
        />
      )}

      {isOpenVillager && (
        <VillagerTourGuide
          steps={HELP_STEPS}
          isOpen={isOpenVillager}
          onClose={() => setIsOpenVillager(false)}
        />
      )}
    </div>
  );
}
