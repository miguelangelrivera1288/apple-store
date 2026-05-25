// ===============================
// Carrito en memoria
// ===============================
let carrito = [];

// ===============================
// Navegación
// ===============================
function irATienda() {
  window.location.href = "store.html";
}

function volverATienda() {
  window.location.href = "store.html";
}

function irACatalogo() {
  window.location.href = "catalogo.html";
}

// ===============================
// Agregar producto al carrito
// ===============================
// Recibe nombre, precio e imagen
function agregarAlCarrito(nombre, precio, imagen) {
  carrito.push({ nombre, precio, imagen });
  alert(nombre + " agregado al carrito.");
}

// ===============================
// Mostrar productos en la página de compras
// ===============================
function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  if (!lista) return;

  lista.innerHTML = "";

  // Si el carrito está vacío
  if (carrito.length === 0) {
    lista.innerHTML = "<p>Tu carrito está vacío.</p>";
    return;
  }

  let subtotal = 0;

  carrito.forEach((producto, index) => {
    subtotal += producto.precio;

    const div = document.createElement("div");
    div.classList.add("producto-carrito");
    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="carrito-item-img">
      <span>${producto.nombre} - $${producto.precio}</span>
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    lista.appendChild(div);
  });

  // Calcular descuento y total
  let descuento = subtotal > 2000 ? subtotal * 0.1 : 0; // 10% si supera 2000
  let total = subtotal - descuento;

  // Mostrar resumen
  const resumen = document.createElement("div");
  resumen.classList.add("carrito-total");
  resumen.innerHTML = `
    <p>Subtotal: $${subtotal}</p>
    <p>Descuento: $${descuento}</p>
    <p><strong>Total: $${total}</strong></p>
    <p><em>${carrito.length} productos en tu carrito</em></p>
  `;
  lista.appendChild(resumen);
}

// ===============================
// Eliminar producto del carrito
// ===============================
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}

// ===============================
// Finalizar compra
// ===============================
function pagar() {
  alert("Compra realizada con éxito.");
  carrito = [];
  mostrarCarrito();
  window.location.href = "checkout.html";
}

// ===============================
// Mostrar carrito automáticamente
// ===============================
if (document.getElementById("lista-carrito")) {
  mostrarCarrito();
}
