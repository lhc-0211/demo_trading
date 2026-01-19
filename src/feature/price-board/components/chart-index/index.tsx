import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ChartRender from "./ChartRender";

export default function ChartIndex() {
  const [openIndex] = React.useState(() =>
    Number((Math.random() * 2 + 253).toFixed(2)),
  );

  return (
    <div className="w-full h-full">
      <Swiper
        navigation={true}
        spaceBetween={8}
        modules={[Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },
          500: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1740: { slidesPerView: 4 },
        }}
        zoom={false}
        className="h-full w-full"
      >
        <SwiperSlide>
          <div className="w-full h-full flex flex-col bg-chart-bg rounded p-1">
            <div className="flex flex-row items-center justify-between pb-2 md:px-1 md:pt-1 md:pb-3">
              <div className="flex flex-col items-start">
                <h1 className="text-xs md:text-sm font-medium">VN-INDEX</h1>
                <div className="flex flex-row gap-2 md:gap-4">
                  <span className="md:text-xs text-[10px] font-normal text-chart-2 flex flex-row items-center gap-1">
                    <TrendingUp className="size-4" /> 143
                  </span>
                  <span className="md:text-xs text-[10px] font-normal text-chart-3">
                    - 65
                  </span>
                  <span className="md:text-xs text-[10px] font-normal text-chart-5 flex flex-row items-center gap-1">
                    <TrendingDown className="size-4" /> 174
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <h1 className="text-xs md:text-sm font-medium text-chart-2">
                  1,879.13
                </h1>
                <span className="md:text-xs text-[10px] font-normal text-chart-2">
                  14.33 ( 0.77% )
                </span>
              </div>
            </div>
            <div className="flex-1">
              <ChartRender openIndex={openIndex} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex flex-col bg-chart-bg rounded p-1">
            <div className="flex flex-row items-center justify-between pb-2 md:px-1 md:pt-1 md:pb-3">
              <div className="flex flex-col items-start">
                <h1 className="text-xs md:text-sm font-medium">VN30-INDEX</h1>
                <div className="flex flex-row gap-2 md:gap-4">
                  <span className="md:text-xs text-[10px] font-normal text-chart-2 flex flex-row items-center gap-1">
                    <TrendingUp className="size-4" /> 143
                  </span>
                  <span className="md:text-xs text-[10px] font-normal text-chart-3">
                    - 65
                  </span>
                  <span className="md:text-xs text-[10px] font-normal text-chart-5 flex flex-row items-center gap-1">
                    <TrendingDown className="size-4" /> 174
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <h1 className="text-xs md:text-sm font-medium text-chart-2">
                  1,879.13
                </h1>
                <span className="md:text-xs text-[10px] font-normal text-chart-2">
                  14.33 ( 0.77% )
                </span>
              </div>
            </div>
            <div className="flex-1">
              <ChartRender openIndex={openIndex} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex flex-col bg-chart-bg rounded p-1">
            <div className="flex flex-row items-center justify-between pb-2 md:px-1 md:pt-1 md:pb-3">
              <div className="flex flex-col items-start">
                <h1 className="text-xs md:text-sm font-medium">HNX-INDEX</h1>
                <div className="flex flex-row gap-2 md:gap-4">
                  <span className="md:text-xs text-[10px] font-normal text-chart-2 flex flex-row items-center gap-1">
                    <TrendingUp className="size-4" /> 143
                  </span>
                  <span className="md:text-xs text-[10px] font-normal text-chart-3">
                    - 65
                  </span>
                  <span className="md:text-xs text-[10px] font-normal text-chart-5 flex flex-row items-center gap-1">
                    <TrendingDown className="size-4" /> 174
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <h1 className="text-xs md:text-sm font-medium text-chart-2">
                  1,879.13
                </h1>
                <span className="md:text-xs text-[10px] font-normal text-chart-2">
                  14.33 ( 0.77% )
                </span>
              </div>
            </div>
            <div className="flex-1">
              <ChartRender openIndex={openIndex} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex flex-col bg-chart-bg rounded p-1">
            <div className="flex flex-row items-center justify-between pb-2 md:px-1 md:pt-1 md:pb-3">
              <div className="flex flex-col items-start">
                <h1 className="text-xs md:text-sm font-medium">UPCOM-INDEX</h1>
                <div className="flex flex-row gap-2 md:gap-4">
                  <span className="md:text-xs text-[10px] font-normal text-chart-2 flex flex-row items-center gap-1">
                    <TrendingUp className="size-4" /> 143
                  </span>
                  <span className="md:text-xs text-[10px] font-normal text-chart-3">
                    - 65
                  </span>
                  <span className="md:text-xs text-[10px] font-normal text-chart-5 flex flex-row items-center gap-1">
                    <TrendingDown className="size-4" /> 174
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <h1 className="text-xs md:text-sm font-medium text-chart-2">
                  1,879.13
                </h1>
                <span className="md:text-xs text-[10px] font-normal text-chart-2">
                  14.33 ( 0.77% )
                </span>
              </div>
            </div>
            <div className="flex-1">
              <ChartRender openIndex={openIndex} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
