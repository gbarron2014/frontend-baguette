import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Columna de Imagen con estilo decorativo */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 right-8 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Baguettes artesanales" 
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-4xl font-black italic">100%</p>
                <p className="text-sm font-bold uppercase tracking-widest">Artesanal</p>
              </div>
            </div>
          </div>

          {/* Columna de Texto */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-bold tracking-wider uppercase">
              Nuestra Historia
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Pasión por el sabor, <br />
              <span className="text-orange-600">tradición en cada mordida.</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              En nuestra microempresa, no solo hacemos leños y baguettes; creamos experiencias. Lo que comenzó en una cocina familiar en **Guanajuato** como el deseo de compartir el auténtico pan dorado a la plancha, hoy se convierte en tu mejor opción de cena a domicilio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Ingredientes Locales</h4>
                  <p className="text-sm text-gray-500">Apoyamos a productores de la región para garantizar frescura.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Entrega Rápida</h4>
                  <p className="text-sm text-gray-500">Tus leños llegan calientes y crujientes a la puerta de tu casa.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <img 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white" 
                    src={`https://i.pravatar.cc/100?img=${i+10}`} 
                    alt="Cliente satisfecho" 
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">
                <span className="text-gray-900 font-bold">+100 clientes</span> ya probaron el sabor de Guanajuato esta semana.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;