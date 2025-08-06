const API_URL = 'https://funval-backend.onrender.com/productos';
const contenedor = document.getElementById('productos-container');

async function cargarProductos() {
  try {
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
      throw new Error('Error al obtener productos');
    }

    const productos = await respuesta.json();

    // Limpiar contenedor por si se vuelve a llamar
    contenedor.innerHTML = '';

    productos.forEach((producto) => {
      const card = document.createElement('div');
      card.className =
        'bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col justify-between';

      card.innerHTML = `
        <h2 class="text-lg font-bold text-gray-900 dark:text-white">${producto.nombre}</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-2">${producto.descripcion}</p>
        <p class="text-green-600 font-semibold mb-1">Precio: $${producto.precio}</p>
        <p class="text-sm text-gray-500 dark:text-gray-400">Stock: ${producto.stock}</p>
        <p class="text-sm text-gray-500 dark:text-gray-400">Categoría: ${producto.categoria}</p>
        <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
          Comprar
        </button>
      `;

      contenedor.appendChild(card);
    });
  } catch (error) {
    console.error('Error al cargar productos:', error);
    contenedor.innerHTML = `<p class="text-red-500">No se pudieron cargar los productos.</p>`;
  }
}

cargarProductos();
