let perfumes = [
    { id: 1, nombre: "eros", precio: 50000, imagen: "/imagenes/eros.jpg" },
    { id: 2, nombre: "gentleman", precio: 50000, imagen: "/imagenes/gentleman.jpg" },
    { id: 3, nombre: "creed", precio: 50000, imagen: "/imagenes/creed.jpg" },
    { id: 4, nombre: "goodgirl", precio: 50000, imagen: "goodgirl.jpg" },
    { id: 5, nombre: "scandal", precio: 50000, imagen: "scandal.jpg" },
    { id: 6, nombre: "ckone", precio: 50000, imagen: "ckone.jpg" },
    { id: 3, nombre: "tomford", precio: 50000, imagen: "tomford.jpg" },
  ];
  
  function renderizarPerfumes() {
    const parfumList = document.getElementById("parfumList");
    parfumList.innerHTML = "";
    perfumes.forEach((perfume) => {
      const perfumeDiv = document.createElement("div");
      perfumeDiv.className = "producto";
      perfumeDiv.innerHTML = `
        <img src="${perfume.imagen}" alt="${perfume.nombre}">
        <h3>${perfume.nombre}</h3>
        <p>Precio: $${perfume.precio.toLocaleString()}</p>
        <button onclick="editarPerfume(${perfume.id})">Editar</button>
        <button onclick="eliminarPerfume(${perfume.id})">Eliminar</button>
      `;
      parfumList.appendChild(perfumeDiv);
    });
  }
  
  document.getElementById("perfumeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("perfumeName").value.trim();
    const precio = parseFloat(document.getElementById("perfumePrice").value);
    if (nombre === "" || isNaN(precio) || precio <= 0) {
      alert("Por favor, ingrese un nombre y un precio válido.");
      return;
    }
  
    const id = perfumes.length ? perfumes[perfumes.length - 1].id + 1 : 1;
    const imagen = "default.jpg"; // Aquí podrías agregar la lógica para manejar imágenes
  
    perfumes.push({ id, nombre, precio, imagen });
    renderizarPerfumes();
    document.getElementById("perfumeForm").reset();
  });
  
  function eliminarPerfume(id) {
    perfumes = perfume.filter((perfume) => perfume.id !== id);
    renderizarPerfumes();
  }
  
  function editarPerfume(id) {
    const prefume = perfumes.find((prop) => prop.id === id);
    const nuevoNombre = prompt("Editar nombre del perfume:", perfume.nombre);
    const nuevoPrecio = prompt("Editar precio del perfume:", perfume.precio);
  
    if (nuevoNombre !== null && nuevoPrecio !== null) {
      if (nuevoNombre.trim() === "" || isNaN(parseFloat(nuevoPrecio)) || parseFloat(nuevoPrecio) <= 0) {
        alert("Por favor, ingrese un nombre y un precio válido.");
        return;
      }
      perfume.nombre = nuevoNombre.trim();
      perfume.precio = parseFloat(nuevoPrecio);
      renderizarPerfumes();
    }
  }
  
  document.addEventListener("DOMContentLoaded", renderizarPerfumes);
  
  // Inicializar la lista de perfumes
  document.addEventListener("DOMContentLoaded", renderizarPerfumes);