import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import carrito from "../assets/carritomorado.png";

export const CartWidget = () => {
  const { productosAgregados } = useContext(CartContext);

  const cantidadTotal = productosAgregados.reduce(
    (acc, product) => acc + product.cantidad,
    0
  );

  return (
    <Link to="/cart">
      <img src={carrito} alt="Carrito de compras" className="icono-carrito" />
      <span className="contador-carrito">{cantidadTotal}</span>
    </Link>
  );
};
