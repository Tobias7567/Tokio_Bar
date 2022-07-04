import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Dat } from "./Firebase";
import { ItemList } from "./ItemList";
import "./Bar.css"
import { getDoc, getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      const productosdeventa = collection(Dat, "Productos");
      const documentos = getDocs(productosdeventa);

      documentos
        .then((respuesta) => setItems(respuesta.docs.map((doc) => doc.data())))
        .catch((error) => console.log("Error al obtener los productos"))
        .finally(() => setLoading(false));
    } else {
      const productosdeventa = collection(Dat, "Productos");
      const miFiltro = query(productosdeventa, where("category", "==", id));
      const documentos = getDocs(miFiltro);

      documentos
        .then((respuesta) => setItems(respuesta.docs.map((doc) => doc.data())))
        .catch((error) => console.log("Error al obtener los productos"))
        .finally(() => setLoading(false));
    }
  }, [id]);

  return (
    <>
      <div className="itemlistconteiner">
        <h2 className="title1" id="title"> {greeting} </h2>
        {loading ?  <h2 className="cargando">Cargando productos... </h2> :   <ItemList items={items} />}
      
      </div>
    </>
  );
};
