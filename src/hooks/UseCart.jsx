import { useState } from "react";

export const useCart = () => {
  const [productosAgregados, setProductosAgregados] = useState([]);

  const addProduct = (producto, cantidad) => {
    const { stock, ...item } = producto;
    const existente = productosAgregados.some(
      (producto) => producto.id === item.id
    );
    if (!existente)
      setProductosAgregados((prev) => [...prev, { ...item, cantidad }]);
    else {
      const actualizarProductos = productosAgregados.map((producto) => {
        if (producto.id === item.id)
          return {
            ...producto,
            cantidad: producto.cantidad + cantidad,
          };
        else return producto;
      });
      setProductosAgregados(actualizarProductos);
    }
  };

  const deleteProduct = (id) => {
    const nuevosProductos = productosAgregados.reduce((acc, producto) => {
      if (producto.id === id) {
        if (producto.cantidad > 1) {
          acc.push({ ...producto, cantidad: producto.cantidad - 1 });
        }
      } else {
        acc.push(producto);
      }
      return acc;
    }, []);

    setProductosAgregados(nuevosProductos);
  };

  const clear = () => setProductosAgregados([]);

  return {
    productosAgregados,
    addProduct,
    clear,
    deleteProduct,
  };
};
