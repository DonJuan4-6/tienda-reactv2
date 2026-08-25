import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css'
import { useState } from 'react'; 

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const productosFiltrados = productos.filter(producto =>{
        const coincideNombre = producto.nombre
          .toLowerCase()
          .includes(busqueda.toLowerCase());

        const coincideCategoria = categoria === "Todas" || producto.categoria === categoria;
        const coincideStock = !soloDisponibles || producto.stock > 0;

        return (
          coincideNombre && coincideCategoria && coincideStock
        );
      });
  


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
      <select value={categoria}
              onChange={(evento)=> setCategoria(evento.target.value)}>
      <option value="Todas">Todas</option>
      <option value="Perifericos">Periféricos</option>
      <option value="Pantallas">Pantallas</option>
      </select>

      <label> <input type="checkbox"
                     checked={soloDisponibles}
                     onChange={(evento)=> setSoloDisponibles(evento.target.checked)}
              />
                Mostrar únicamente disponibles
      </label>
      

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