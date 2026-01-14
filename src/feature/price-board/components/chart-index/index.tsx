import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
          <div className="w-full h-full bg-card rounded-md"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-card rounded-md"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-card rounded-md"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-card rounded-md"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
