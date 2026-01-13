import Error404 from "@/assets/lottie/Error-404.json";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";

export default function Error({ reset }: { reset: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Error404,
    });

    return () => animation.destroy();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-dvh w-full">
      <div ref={containerRef} className="size-80 md:size-150" />
      <div className="flex flex-col items-center justify-center">
        {/* Nút thử lại chính */}
        <Button onClick={() => reset()} className="w-40 md:w-100">
          {t("reset-page")}
        </Button>

        {/* Nút phụ: quay về trang trước hoặc home */}
        <div className="mt-6">
          <Button variant={"secondary"} onClick={() => window.history.back()}>
            {t("pre-page")}
          </Button>
          <span className="mx-4 text-gray-400">|</span>
          <a
            href="/"
            className="text-primary-popover hover:text-primary-popover/50 hover:underline transition text-xs md:text-sm"
          >
            {t("go-home")}
          </a>
        </div>
      </div>
    </div>
  );
}
