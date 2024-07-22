let totalPagar = 0;

function consolidarCompra() {
  if (totalPagar === 0) {
    window.location.href = "#productos"; // Redirige a la sección de productos
  } else {
    alert("Compra consolidada. Total a pagar: $" + totalPagar);
    // Limpiar el carrito y reiniciar total a pagar
    document.getElementById('carrito').innerHTML = '';
    totalPagar = 0;
    actualizarVoucher();
  }
}

function agregarAlCarrito(id, nombre, precio) {
  totalPagar += precio;
  const carrito = document.getElementById('carrito');
  const item = document.createElement('div');
  item.textContent = `${nombre} - $${precio}`;
  carrito.appendChild(item);
  actualizarVoucher();
}

function actualizarVoucher() {
  document.querySelector('#voucher p').textContent = `Total a pagar: $${totalPagar}`;
}



