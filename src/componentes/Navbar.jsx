import React from "react";
import { navbarLinks } from "../data/navbar";
import { GiSlicedBread } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import { useState } from "react";
import MenuResponsivo from "./MenuResponsivo";

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between font-bold items-center py-8">
          {
            //Sección de Logo
          }
          <div className="text-2xl flex items-center gap-2 uppercase">
            <GiSlicedBread />
            <p className="text-primary">La Casa Del Baguette</p>
            <p className="text-secondary">Leños</p>
          </div>

          {
            //Sección de Menú
          }
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {navbarLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    className="relative text-gray-600 font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-primary/10 hover:text-primary active:scale-95"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {
            //Sección de Íconos
          }
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
              <PiShoppingCartLight />
            </button>
            <button className="hover:bg-primary font-semibold rounded-md text-white bg-secondary px-4 py-2 duration-300 border-primary hidden md:block">
              Ingresar
            </button>
          </div>

          {
            //Sección de Móvil
          }
          <div className="md:hidden">
            <MdMenu onClick={() => setAbierto(!abierto)} className="text-4xl" />
          </div>
        </div>
      </nav>
      {
        // Menu Responsivo
      }
      <div className="md:hidden">
        <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
      </div>
    </>
  );
};

export default Navbar;
