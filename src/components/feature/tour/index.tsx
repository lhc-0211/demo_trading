import GoblinTourGuide from "@/components/feature/tour/GoblinTourGuide";
import MasterTourGuide from "@/components/feature/tour/MasterTourGuide";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  buildDevIntroSteps,
  buildHelpSteps,
  buildTourIntroSteps,
  buildUserIntroSteps,
} from "@/configs";
import { CircleQuestionMark } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import VillagerTourGuide from "./VillagerTourGuide";

export default function TourGuide() {
  const { t } = useTranslation();

  const [isOpenGoblin, setIsOpenGoblin] = useState(() => {
    const tourIntro = localStorage.getItem("tour_intro");
    if (!tourIntro) {
      localStorage.setItem("tour_intro", "1");
      return true;
    }
    return false;
  });
  const [isOpenMaster, setIsOpenMaster] = useState(false);
  const [isOpenVillager, setIsOpenVillager] = useState(false);
  const [type, setType] = useState<"user" | "dev">("user");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const btnUser = document.getElementById(
        "tour-user",
      ) as HTMLDivElement | null;
      const btnDev = document.getElementById(
        "tour-dev",
      ) as HTMLDivElement | null;
      const btnFure = document.getElementById(
        "help-feature",
      ) as HTMLDivElement | null;
      const btnTech = document.getElementById(
        "help-tech",
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

      if (btnFure && !btnFure.dataset.eventAttached) {
        btnFure.onclick = () => {
          setIsOpenGoblin(false);
          setTimeout(() => {
            setType("user");
            setIsOpenVillager(false);
            setIsOpenMaster(true);
          }, 150);
        };
        btnFure.dataset.eventAttached = "true";
      }

      if (btnTech && !btnTech.dataset.eventAttached) {
        btnTech.onclick = () => {
          setIsOpenGoblin(false);
          setTimeout(() => {
            setType("dev");
            setIsOpenVillager(false);
            setIsOpenMaster(true);
          }, 150);
        };
        btnTech.dataset.eventAttached = "true";
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  const helpSteps = useMemo(() => buildHelpSteps(t), [t]);
  const userIntroSteps = useMemo(() => buildUserIntroSteps(t), [t]);
  const devIntroSteps = useMemo(() => buildDevIntroSteps(t), [t]);
  const tourIntroSteps = useMemo(() => buildTourIntroSteps(t), [t]);

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="absolute bottom-4 right-4"
            onClick={() => setIsOpenVillager(true)}
          >
            <CircleQuestionMark className="size-4 md:size-6 text-ring hover:text-foreground" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Trợ giúp</p>
        </TooltipContent>
      </Tooltip>

      {isOpenGoblin && (
        <GoblinTourGuide
          steps={tourIntroSteps}
          isOpen={isOpenGoblin}
          onClose={() => setIsOpenGoblin(false)}
          popoverClass="avatar-gobil"
        />
      )}

      {isOpenMaster && (
        <MasterTourGuide
          steps={type === "user" ? userIntroSteps : devIntroSteps}
          isOpen={isOpenMaster}
          onClose={() => setIsOpenMaster(false)}
        />
      )}

      {isOpenVillager && (
        <VillagerTourGuide
          steps={helpSteps}
          isOpen={isOpenVillager}
          onClose={() => setIsOpenVillager(false)}
        />
      )}
    </>
  );
}
