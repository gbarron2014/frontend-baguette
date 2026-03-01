import React, { useState } from "react";
import productos from "../../data/productos";

const Pedido = () => {
  const [carrito, setCarrito] = useState([]);
  const [seleccion, setSeleccion] = useState({ id: "", cantidad: 1 });
  const [datosCliente, setDatosCliente] = useState({
    nombre: "",
    telefono: "",
    ubicacion: "",
    notas: "",
  });

  const handleChangeCliente = (e) => {
    const { name, value } = e.target;
    setDatosCliente({ ...datosCliente, [name]: value });
  };

  const agregarAlCarrito = () => {
    if (!seleccion.id) return alert("Por favor selecciona un sabor de leño");

    const producto = productos.find(
      (p) => p.id_producto === parseInt(seleccion.id),
    );
    const nuevoItem = {
      ...producto,
      cantidad: parseInt(seleccion.cantidad),
      subtotal: producto.precio * parseInt(seleccion.cantidad),
    };

    setCarrito([...carrito, nuevoItem]);
    setSeleccion({ id: "", cantidad: 1 });
  };

  const eliminarDelCarrito = (index) => {
    setCarrito(carrito.filter((_, i) => i !== index));
  };

  const calcularTotal = () =>
    carrito.reduce((acc, item) => acc + item.subtotal, 0);

  const enviarPedido = (e) => {
    e.preventDefault();
    if (carrito.length === 0)
      return alert("Debes agregar al menos un producto a tu pedido");

    let detalleProductos = carrito
      .map(
        (item) =>
          `- ${item.cantidad}x Leño de ${item.sabor} ($${item.subtotal})`,
      )
      .join("%0A");

    const mensaje =
      `*NUEVO PEDIDO DE LEÑOS* 🔥%0A%0A` +
      `*CLIENTE:* ${datosCliente.nombre}%0A` +
      `*TELÉFONO:* ${datosCliente.telefono}%0A` +
      `*UBICACIÓN:* ${datosCliente.ubicacion}%0A%0A` +
      `*DETALLE DEL PEDIDO:*%0A${detalleProductos}%0A%0A` +
      `*TOTAL:* $${calcularTotal()}%0A` +
      `*NOTAS:* ${datosCliente.notas || "Sin notas adicionales"}`;

    const miTelefono = import.meta.env.VITE_TELEFONO;
    console.log(miTelefono);
    window.open(`https://wa.me/${miTelefono}?text=${mensaje}`, "_blank");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-3xl shadow-2xl my-10 border border-gray-100 font-sans">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-orange-600 uppercase tracking-tighter">
          Mi Pedido
        </h2>
        <p className="text-gray-500 font-medium">
          Completa tus datos para enviarte tus leños
        </p>
      </div>

      <form onSubmit={enviarPedido} className="space-y-6">
        {/* --- SECCIÓN 1: DATOS DEL CLIENTE --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-2xl">
          <div className="col-span-1">
            <label className="text-xs font-bold text-gray-400 ml-1">
              NOMBRE
            </label>
            <input
              type="text"
              name="nombre"
              required
              placeholder="¿Quién recibe?"
              className="w-full border-gray-200 rounded-xl p-3 focus:ring-orange-500 border"
              onChange={handleChangeCliente}
            />
          </div>
          <div className="col-span-1">
            <label className="text-xs font-bold text-gray-400 ml-1">
              TELÉFONO
            </label>
            <input
              type="tel"
              name="telefono"
              required
              placeholder="Tu número de contacto"
              className="w-full border-gray-200 rounded-xl p-3 focus:ring-orange-500 border"
              onChange={handleChangeCliente}
            />
          </div>
          <div className="col-span-2">
            <label className="text-xs font-bold text-gray-400 ml-1">
              UBICACIÓN / DIRECCIÓN
            </label>
            <input
              type="text"
              name="ubicacion"
              required
              placeholder="Calle, número y colonia"
              className="w-full border-gray-200 rounded-xl p-3 focus:ring-orange-500 border"
              onChange={handleChangeCliente}
            />
          </div>
          <div className="col-span-2">
            <label className="text-xs font-bold text-gray-400 ml-1">
              NOTAS (OPCIONAL)
            </label>
            <input
              type="text"
              name="notas"
              placeholder="Ej: Traer cambio de $200, sin cebolla..."
              className="w-full border-gray-200 rounded-xl p-3 focus:ring-orange-500 border"
              onChange={handleChangeCliente}
            />
          </div>
        </div>

        {/* --- SECCIÓN 2: SECCIÓN DEL PRODUCTO --- */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
            <span className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
              2
            </span>
            Selecciona tus Leños
          </h3>
          <div className="flex flex-col md:flex-row gap-3">
            <select
              className="flex-1 border-gray-200 rounded-xl p-3 bg-white border"
              value={seleccion.id}
              onChange={(e) =>
                setSeleccion({ ...seleccion, id: e.target.value })
              }
            >
              <option value="">Elegir Sabor...</option>
              {productos.map((p) => (
                <option key={p.id_producto} value={p.id_producto}>
                  {p.sabor} (${p.precio})
                </option>
              ))}
            </select>
            <input
              type="number"
              min="1"
              className="w-24 border-gray-200 rounded-xl p-3 border"
              value={seleccion.cantidad}
              onChange={(e) =>
                setSeleccion({ ...seleccion, cantidad: e.target.value })
              }
            />
            <button
              type="button"
              onClick={agregarAlCarrito}
              className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition shadow-md"
            >
              Agregar
            </button>
          </div>
        </div>

        {/* --- RESUMEN DE COMPRA --- */}
        {carrito.length > 0 && (
          <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
            <ul className="space-y-2">
              {carrito.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-sm font-medium"
                >
                  <span>
                    {item.cantidad}x Leño {item.sabor}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600">${item.subtotal}</span>
                    <button
                      type="button"
                      onClick={() => eliminarDelCarrito(index)}
                      className="text-red-500 font-bold"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-orange-200 mt-3 pt-3 flex justify-between items-center font-black text-orange-700 text-lg">
              <span>TOTAL</span>
              <span>${calcularTotal()}</span>
            </div>
          </div>
        )}

        {/* BOTÓN FINAL */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WA"
            className="w-6 h-6"
          />
          ENVIAR PEDIDO POR WHATSAPP
        </button>
      </form>
    </div>
  );
};

export default Pedido;
