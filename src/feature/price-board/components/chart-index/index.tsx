import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ChartRender from "./ChartRender";

export default function ChartIndex() {
  return (
    <div className="w-full h-30 md:h-40">
      <Swiper
        navigation={true}
        spaceBetween={4}
        modules={[Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },
          425: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="h-full w-full"
      >
        <SwiperSlide>
          <div className="w-full h-full bg-secondary rounded-md grid grid-cols-5">
            <div className="col-span-2"></div>
            <div className="col-span-3">
              <ChartRender openIndex={0} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-secondary rounded-md"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-secondary rounded-md"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-secondary rounded-md"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
