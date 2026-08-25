function ProductoCard({ producto }) {
  return (
    <article>
      <h2>{producto.nombre}</h2>
      <p>${producto.precio}</p>
    </article>
  );
}

export default ProductoCard;
//exportacion de la parte de html con una tarjeta que contenga los productos de la lista.