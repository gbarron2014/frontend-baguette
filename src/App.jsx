import Navbar from "./componentes/Navbar";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./componentes/secciones/Home";
import About from "./componentes/secciones/About";
import Pedido from "./componentes/secciones/Pedido";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedidos" element={<Pedido />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
