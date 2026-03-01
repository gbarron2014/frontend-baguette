const descripcion = `¡El sabor de Guanajuato llega hasta la puerta de tu casa! Somos una microempresa familiar
que nace con el antojo de compartir los mejores leños rellenos de la región. Preparados al momento, bien doraditos 
y con ese toque casero que nos distingue. Por ahora, iniciamos con entrega a domicilio para que disfrutes de un festín 
caliente sin salir de casa. ¡Pruébanos y déjanos ser tu nuevo antojo favorito!`;

const About = () => {
  return (
    <section id="#about" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Sobre Nosotros</h2>
        <p className="text-lg">
          {descripcion}
        </p>
      </div>
    </section>
  );
};

export default About;
