import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ product }) => {
  const { eliminarDelCarrito } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={product.img} alt={product.nombre} className="cart-item-img" />

      <div className="cart-item-info">
        <h3>{product.nombre}</h3>
        <p>Precio: ${product.precio}</p>
        <p>Cantidad: {product.cantidad}</p>
        <p>Subtotal: ${product.precio * product.cantidad}</p>
      </div>

      <button onClick={() => eliminarDelCarrito(product.id)}></button>
    </div>
  );
};

export default CartItem;
