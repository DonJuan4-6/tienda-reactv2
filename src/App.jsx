import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css'
import { useState } from 'react'; 

function App() {
  const [busqueda, setBusqueda] = useState("");
  const productosFiltrados = productos.filter(producto =>
              producto.nombre
              .toLowerCase()
              .includes(busqueda.toLowerCase())
            );

  return (
    <main>
      <h1>Tienda tecnológica</h1>
      <input type="text"
             placeholder="Buscar Producto..."
             value={busqueda} 
             onChange={(evento)=>{
              setBusqueda(evento.target.value);
             }}
      />
      {productosFiltrados.map(producto => (
        <ProductoCard
          key={producto.id}
          producto={producto}
        />
      ))}

      {productosFiltrados.length === 0
          ?<p>No se encontraron productos.</p>
          : null
        }
    </main>
  );
}
export default App;