import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const carruselData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1470&auto=format&fit=crop",
    title: "Masa Madre Tradicional",
    subtitle: "Horneado a leña cada mañana",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1470&auto=format&fit=crop",
    title: "Crujiente de Autor",
    subtitle: "La receta secreta de la casa",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bcc04?q=80&w=1470&auto=format&fit=crop",
    title: "Ingredientes Premium",
    subtitle: "Solo harina orgánica y sal de mar",
  },
];

const Carousel = () => {
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
        {carruselData.map((slide) => (
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
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: #ff8901 !important; /* Tu color primary */
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .group:hover .swiper-button-next, .group:hover .swiper-button-prev {
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #ff8901 !important;
        }
      `}</style>
    </div>
  );
};

export default Carousel;