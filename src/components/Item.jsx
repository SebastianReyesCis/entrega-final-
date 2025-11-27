import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.nombre} />
      <h3>{product.nombre}</h3>
      <p>Precio: ${product.precio}</p>
      <p>{product.detalle}</p>
      <p>Categoria: {product.categoria}</p>
      <Link to={`/products/${product.id}`}>
        <button>Ver más</button>
      </Link>
    </div>
  );
};

export default Item;
