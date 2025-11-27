import Item from "./Item";

const ItemList = ({ products }) => {
  console.log(products);
  if (!products.length) return <p>Cargando</p>;

  return (
    <div className="product-list">
      <h2>Productos disponibles</h2>
      <div className="product-flex">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
