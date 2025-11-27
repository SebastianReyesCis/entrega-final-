import { useState, useContext } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import CheckoutForm from "../components/CheckoutForm";
import { Link } from "react-router-dom";

const Cart = () => {
  const { productosAgregados, deleteProduct, clear } = useContext(CartContext);
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const total = () =>
    productosAgregados.reduce(
      (acc, product) => acc + product.precio * product.cantidad,
      0
    );

  const sendOrder = async () => {
    const order = {
      buyer: formValues,
      items: productosAgregados,
      total: total(),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    try {
      const { id } = await addDoc(ordersCollection, order);
      alert(`Orden creada con éxito ID: ${id}`);
      clear();
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  if (productosAgregados.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>Tu carrito está vacío</h2>
        <Link to="/">
          <button>Volver a la tienda</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="carrito">
      <h1>Tu carrito</h1>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {productosAgregados.map((product) => (
            <tr key={product.id}>
              <td className="producto-info">
                <img
                  src={product.img}
                  alt={product.nombre}
                  className="cart-img"
                />
                <span>{product.nombre}</span>
              </td>
              <td>{product.cantidad}</td>
              <td>${product.precio}</td>
              <td>${product.precio * product.cantidad}</td>
              <td>
                <button onClick={() => deleteProduct(product.id)}>x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total: ${total()}</h3>

      <h2>Datos del comprador</h2>
      <CheckoutForm
        formValues={formValues}
        handleChange={handleChange}
        sendOrder={sendOrder}
      />
    </div>
  );
};

export default Cart;
