import EmptyBox from "@/assets/lottie/Empty-Box.json";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function NoData() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  useEffect(() => {
    if (!containerRef.current) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: EmptyBox,
    });

    return () => animation.destroy();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-dvh w-full">
      <div ref={containerRef} className="size-80 md:size-150" />
      <span>{t("no-data")}</span>
    </div>
  );
}
