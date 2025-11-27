import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import salud from "../assets/salud.png";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../components/ItemList";

const ItemListContainer = ({ saludo }) => {
  const { categoriaId } = useParams();
  const [products, setProducts] = useState([]);
  const [showSaludo, setShowSaludo] = useState(true);

  useEffect(() => {
    let saludoTimer;

    if (!categoriaId) {
      setShowSaludo(true);
      saludoTimer = setTimeout(() => {
        setShowSaludo(false);
      }, 2000);
    } else {
      setShowSaludo(false);
    }

    const db = getFirestore();
    const productosRef = categoriaId
      ? query(
          collection(db, "productos"),
          where("categoria", "==", categoriaId)
        )
      : collection(db, "productos");

    getDocs(productosRef)
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log("No se encontraron productos");
          setProducts([]);
        } else {
          const productosFirebase = snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }));
          setProducts(productosFirebase);
        }
      })
      .catch((error) => console.error("Error al obtener productos", error));

    return () => clearTimeout(saludoTimer);
  }, [categoriaId]);

  return (
    <>
      {showSaludo ? (
        <div className="saludo">
          <h1>{saludo}</h1>
          <img src={salud} alt="saludo" />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
