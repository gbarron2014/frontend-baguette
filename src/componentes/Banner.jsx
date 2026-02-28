import { motion as Motion } from "motion/react";

const Banner = () => {
  const FadeUp = (delay) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: delay, ease: "easeInOut" },
  });

  return (
    <section className="bg-white overflow-hidden relative">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] items-center gap-8 py-12">
        
        {/* Información de Marca */}
        <div className="flex flex-col justify-center gap-6 text-center md:text-left">
          <Motion.h1 
            variants={FadeUp(0.2)}
            initial="initial"
            animate="animate"
            className="text-5xl lg:text-7xl font-black text-gray-800 leading-tight uppercase"
          >
            El Arte del <br /> 
            <span className="text-primary italic font-serif">Baguette</span>
          </Motion.h1>
          
          <Motion.p 
            variants={FadeUp(0.4)}
            initial="initial"
            animate="animate"
            className="text-gray-600 text-lg lg:max-w-[500px]"
          >
            Siente el aroma del pan recién horneado a leña. Crujiente por fuera, suave por dentro, hecho con amor en cada amasado.
          </Motion.p>

          {/* Botones de Acción */}
          <Motion.div 
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="flex items-center gap-4 justify-center md:justify-start mt-4"
          >
            <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95">
              Ordenar Ahora
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary/5 transition-all">
              Ver Menú
            </button>
          </Motion.div>
        </div>

        {/* Imagen del Banner */}
        <Motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex justify-center items-center relative"
        >
          {/* Círculo decorativo de fondo */}
          <div className="absolute w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-primary/10 rounded-full -z-10 blur-3xl"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80" 
            alt="Baguette horneado" 
            className="w-[85%] lg:w-[500px] drop-shadow-[20px_20px_40px_rgba(0,0,0,0.2)] rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
          />
        </Motion.div>
      </div>
    </section>
  );
};

export default Banner;