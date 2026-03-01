import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import homeData from "../../data/home";

const Home = () => {
  return (
    <div className="w-full h-96 lg:h-screen relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {homeData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay oscuro para legibilidad */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Contenido del Slide */}
              <div className="container relative h-full flex flex-col justify-center items-center text-center text-white">
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl font-light mb-8 text-gray-200">
                  {slide.subtitle}
                </p>
                <button className="bg-primary hover:bg-secondary text-white px-10 py-3 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                  Descubrir Más
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilos personalizados para Swiper (vía CSS) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
              .swiper-button-next, .swiper-button-prev {
                color: #ff8901 !important;
                opacity: 0;
                transition: opacity 0.3s ease;
              }
              .group:hover .swiper-button-next, .group:hover .swiper-button-prev {
                opacity: 1;
              }
              .swiper-pagination-bullet-active {
                background: #ff8901 !important;
              }
`,
        }}
      />
    </div>
  );
};

export default Home;
