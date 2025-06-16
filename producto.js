function agregarAlCarrito(producto, precio) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push({ producto, precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(producto + " ha sido agregado al carrito.");
}
