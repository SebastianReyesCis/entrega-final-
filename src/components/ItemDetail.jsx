import { useState } from "react";
import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const onAdd = (cantidad) => {
    addProduct(product, cantidad);
    setAdded(true);
  };

  return (
    <div className="product-detail">
      <div className="product-detail-img">
        <img src={product.img} alt={product.nombre} />
      </div>

      <div className="product-detail-info">
        <h2>{product.nombre}</h2>
        <p>{product.detalle}</p>
        <p className="precio">Precio: ${product.precio}</p>

        {!added ? (
          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        ) : (
          <div className="mensaje">
            <p>Producto agregado al carrito</p>
            <Link to="/cart">
              <button className="btn">Ver carrito</button>
            </Link>
            <Link to="/">
              <button className="btn">Seguir comprando</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
