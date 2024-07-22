let carrito = [];

// Función para añadir un perfume al carrito
function addToCart(id, nombre, precio) {
    const item = {
        id: id,
        nombre: nombre,
        precio: precio
    };
    carrito.push(item);
    actualizarCarrito();
}

// Función para eliminar un perfume del carrito por su ID
function removeFromCart(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

// Función para vaciar completamente el carrito
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito en el HTML
function actualizarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    const totalElement = document.getElementById('total');
    let carritoHTML = '';
    let total = 0;

    carrito.forEach(item => {
        carritoHTML += `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">Precio: $${item.precio}</p>
                    <button class="btn btn-danger" onclick="removeFromCart('${item.id}')">Eliminar</button>
                </div>
            </div>
        `;
        total += item.precio;
    });

    carritoItems.innerHTML = carritoHTML;
    totalElement.textContent = total;
}

// Event listener para los botones de "Añadir al carrito"
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            let id = button.getAttribute('data-id');
            let nombre = button.parentNode.querySelector('.card-title').textContent;
            let precioString = button.parentNode.querySelector('.card-text').textContent;
            let precio = parseFloat(precioString.replace('Precio: $', '').replace(',', ''));
            addToCart(id, nombre, precio);
        });
    });
});
