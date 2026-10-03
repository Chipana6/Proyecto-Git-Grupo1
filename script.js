// ============================================
// WE GOT KICKS - Script principal
// Autor: Integrante C
// ============================================

// ---------- 1. ARRAY DE PRODUCTOS ----------
const productos = [
  // ===== JORDAN 1 LOW TRAVIS SCOTT =====
  { id: 1, nombre: "Jordan 1 Low Travis Scott Fragment", marca: "Nike", precio: 1500, categoria: "basket", genero: "hombre", img: "img/Jordan 1 low Travis Scott Fragment.jpg" },
  { id: 2, nombre: "Jordan 1 Low Travis Scott Moca", marca: "Nike", precio: 1200, categoria: "basket", genero: "hombre", img: "img/Jordan 1 low Travis Scott Moca.jpg" },
  { id: 3, nombre: "Jordan 1 Low Travis Scott Reverse Moca", marca: "Nike", precio: 1300, categoria: "basket", genero: "hombre", img: "img/Jordan 1 Low Travis Scott Reverse Moca.jpg" },
  { id: 4, nombre: "Jordan 1 Low Travis Scott Sail Tropical", marca: "Nike", precio: 1100, categoria: "basket", genero: "hombre", img: "img/Jordan 1 Low Travis Scott Sail Tropical.jpg" },
  { id: 5, nombre: "Jordan 1 Low Travis Scott Velvet Brown", marca: "Nike", precio: 1400, categoria: "basket", genero: "hombre", img: "img/Jordan 1 Low Travis Scott Velvet Brown.jpg" },

  // ===== JORDAN 3 =====
  { id: 6, nombre: "Jordan 3 Fragment", marca: "Nike", precio: 1800, categoria: "basket", genero: "hombre", img: "img/Jordan 3 Fragment.jpg" },
  { id: 7, nombre: "Jordan 3 J Balvin Medellin Sunset", marca: "Nike", precio: 900, categoria: "basket", genero: "hombre", img: "img/Jordan 3 J Balvin Medellin Sunset.jpg" },
  { id: 8, nombre: "Jordan 3 J Balvin Rio", marca: "Nike", precio: 850, categoria: "basket", genero: "hombre", img: "img/Jordan 3 J Balvin Rio.jpg" },
  { id: 9, nombre: "Jordan 3 White Cement", marca: "Nike", precio: 700, categoria: "basket", genero: "hombre", img: "img/Jordan 3 White Cement.jpg" },

  // ===== JORDAN 4 =====
  { id: 10, nombre: "Jordan 4 Black Cat", marca: "Nike", precio: 950, categoria: "basket", genero: "hombre", img: "img/Jordan 4 Black Cat.jpg" },
  { id: 11, nombre: "Jordan 4 Brick by Brick", marca: "Nike", precio: 600, categoria: "basket", genero: "hombre", img: "img/Jordan 4 Brick by Brick.jpg" },
  { id: 12, nombre: "Jordan 4 Metallic Purple", marca: "Nike", precio: 550, categoria: "basket", genero: "hombre", img: "img/Jordan 4 Metallic Purple.jpg" },
  { id: 13, nombre: "Jordan 4 Metallic Red", marca: "Nike", precio: 580, categoria: "basket", genero: "hombre", img: "img/Jordan 4 Metallic Red.jpg" },
  { id: 14, nombre: "Jordan 4 Military Black", marca: "Nike", precio: 620, categoria: "basket", genero: "hombre", img: "img/Jordan 4 Military Black.jpg" },

  // ===== HOODIES =====
  { id: 15, nombre: "Hoodie Valley Dreams Bling Bling", marca: "Valley", precio: 180, categoria: "ropa", genero: "hombre", img: "img/Hoodie Valley Dreams Bling Bling.jpg" },
  { id: 16, nombre: "Hoodie Valley Dreams Blue", marca: "Valley", precio: 150, categoria: "ropa", genero: "hombre", img: "img/Hoodie Valley Dreams Blue.jpg" },
  { id: 17, nombre: "Hoodie Valley Dreams Mono Oro", marca: "Valley", precio: 170, categoria: "ropa", genero: "hombre", img: "img/Hoddie Valley Dreams Mono Oreo.webp" },
  { id: 18, nombre: "Hoodie Valley Dreams Portugal", marca: "Valley", precio: 160, categoria: "ropa", genero: "hombre", img: "img/Hoddie Valley Dreams Portugal.jpg" },
  { id: 19, nombre: "Hoodie Valley Dreams Classic", marca: "Valley", precio: 140, categoria: "ropa", genero: "hombre", img: "img/Hoddie Valley Dreams.jpg" },

  // ===== JERSEYS SUPREME =====
  { id: 20, nombre: "Jersey Supreme Football Black", marca: "Supreme", precio: 220, categoria: "ropa", genero: "hombre", img: "img/Jersey Supreme Football Black.jpg" },
  { id: 21, nombre: "Jersey Supreme Soccer Black", marca: "Supreme", precio: 200, categoria: "ropa", genero: "hombre", img: "img/Jersey Supreme Soccer Black.jpg" },
  { id: 22, nombre: "Jersey Supreme Spiderweb", marca: "Supreme", precio: 250, categoria: "ropa", genero: "hombre", img: "img/Jersey Supreme Spiderweb.jpg" },

  // ===== OFF WHITE =====
  { id: 23, nombre: "Off White Blue", marca: "Off White", precio: 350, categoria: "ropa", genero: "hombre", img: "img/Off White Blue.jpg" },
  { id: 24, nombre: "Off White Out of Office", marca: "Off White", precio: 480, categoria: "basket", genero: "hombre", img: "img/Off White- Out of Office.jpg" },

  // ===== SUPREME X FOX =====
  { id: 25, nombre: "Supreme x Fox Racing", marca: "Supreme", precio: 280, categoria: "ropa", genero: "hombre", img: "img/Supreme x Fox Racing.jpg" }
];

// ---------- 2. ESTADO ----------
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// ---------- 3. REFERENCIAS DOM ----------
const gridProductos = document.getElementById("grid-productos");
const contadorProductos = document.getElementById("contador-productos");
const buscador = document.getElementById("buscador");
const filtroCategoria = document.getElementById("filtro-categoria");
const filtroGenero = document.getElementById("filtro-genero");
const filtroMarca = document.getElementById("filtro-marca");
const btnLimpiar = document.getElementById("limpiar-filtros");
const lanzamientosScroll = document.getElementById("lanzamientos-scroll");
const contadorFavoritos = document.getElementById("contador-favoritos");
const btnFavoritos = document.getElementById("btn-favoritos");
const toastContainer = document.getElementById("toast-container");
const btnTop = document.getElementById("btn-top");

// ============================================
// 4. RENDERIZAR PRODUCTOS
// ============================================
function renderizarProductos(lista) {
  gridProductos.innerHTML = "";

  if (lista.length === 0) {
    gridProductos.innerHTML = `
      <div class="sin-resultados">
        <p>No se encontraron productos que coincidan con tu búsqueda.</p>
        <button onclick="limpiarFiltros()">Limpiar filtros</button>
      </div>
    `;
    contadorProductos.textContent = "0 productos encontrados";
    return;
  }

  lista.forEach(p => {
    const card = document.createElement("div");
    card.className = "producto-card";
    const esFav = favoritos.includes(p.id);

    card.innerHTML = `
      <div class="producto-imagen">
        <img src="${p.img}" alt="${p.nombre}" loading="lazy">
        <button class="corazon ${esFav ? 'favorito' : ''}" data-id="${p.id}">
          ${esFav ? '♥' : '♡'}
        </button>
      </div>
      <div class="producto-info">
        <h3>${p.nombre}</h3>
        <p class="producto-marca">${p.marca}</p>
        <p class="producto-precio">$${p.precio}</p>
        <div class="producto-etiquetas">
          <span class="etiqueta">${p.categoria}</span>
          <span class="etiqueta">${p.genero}</span>
        </div>
      </div>
    `;

    card.querySelector(".corazon").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorito(p.id, p.nombre);
    });

    gridProductos.appendChild(card);
  });

  contadorProductos.textContent = `${lista.length} producto${lista.length !== 1 ? 's' : ''} encontrado${lista.length !== 1 ? 's' : ''}`;
}

// ============================================
// 5. FILTROS
// ============================================
function aplicarFiltros() {
  const texto = buscador.value.toLowerCase().trim();
  const cat = filtroCategoria.value;
  const gen = filtroGenero.value;
  const mar = filtroMarca.value;

  const filtrados = productos.filter(p => {
    const coincideTexto = p.nombre.toLowerCase().includes(texto) ||
                          p.marca.toLowerCase().includes(texto);
    const coincideCat = cat === "todos" || p.categoria === cat;
    const coincideGen = gen === "todos" || p.genero === gen;
    const coincideMar = mar === "todas" || p.marca === mar;
    return coincideTexto && coincideCat && coincideGen && coincideMar;
  });

  renderizarProductos(filtrados);
}

function limpiarFiltros() {
  buscador.value = "";
  filtroCategoria.value = "todos";
  filtroGenero.value = "todos";
  filtroMarca.value = "todas";
  renderizarProductos(productos);
  mostrarToast("Filtros limpiados");
}

// Eventos
buscador.addEventListener("input", aplicarFiltros);
filtroCategoria.addEventListener("change", aplicarFiltros);
filtroGenero.addEventListener("change", aplicarFiltros);
filtroMarca.addEventListener("change", aplicarFiltros);
btnLimpiar.addEventListener("click", limpiarFiltros);

// ============================================
// 6. MARCAS POPULARES
// ============================================
document.querySelectorAll(".marca-card").forEach(btn => {
  btn.addEventListener("click", () => {
    filtroMarca.value = btn.dataset.marca;
    aplicarFiltros();
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
    mostrarToast(`Filtrando por ${btn.dataset.marca}`);
  });
});

// ============================================
// 7. MENÚ DE CATEGORÍAS
// ============================================
document.querySelectorAll(".menu-item").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".menu-item").forEach(i => i.classList.remove("activo"));
    item.classList.add("activo");

    if (item.dataset.genero) {
      filtroGenero.value = item.dataset.genero;
      filtroCategoria.value = "todos";
    } else if (item.dataset.categoria) {
      filtroCategoria.value = item.dataset.categoria;
      filtroGenero.value = "todos";
    } else {
      filtroCategoria.value = "todos";
      filtroGenero.value = "todos";
    }

    aplicarFiltros();
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  });
});

// ============================================
// 8. CARRUSEL
// ============================================
const slides = [
  { titulo: "WE GOT", subtitulo: "KICKS", texto: "Los sneakers más buscados del momento", img: "img/Jordan 4 Black Cat.jpg" },
  { titulo: "TRAVIS SCOTT", subtitulo: "COLLECTION", texto: "Ediciones limitadas disponibles ahora", img: "img/Jordan 1 low Travis Scott Moca.jpg" },
  { titulo: "STREETWEAR", subtitulo: "SUPREME", texto: "Comodidad y diseño en cada prenda", img: "img/Jersey Supreme Spiderweb.jpg" }
];

let slideActual = 0;
const carrusel = document.getElementById("carrusel");
const indicadores = document.getElementById("carrusel-indicadores");

function renderizarCarrusel() {
  carrusel.innerHTML = "";
  indicadores.innerHTML = "";

  slides.forEach((s, i) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `
      <div class="slide-texto">
        <h1>${s.titulo}<br>${s.subtitulo}</h1>
        <p>${s.texto}</p>
        <a href="#catalogo" class="btn-hero">Compra Ahora</a>
      </div>
      <div class="slide-imagen">
        <img src="${s.img}" alt="${s.titulo} ${s.subtitulo}">
      </div>
    `;
    carrusel.appendChild(slide);

    const ind = document.createElement("button");
    ind.className = `indicador ${i === 0 ? 'activo' : ''}`;
    ind.addEventListener("click", () => irASlide(i));
    indicadores.appendChild(ind);
  });

  actualizarCarrusel();
}

function actualizarCarrusel() {
  carrusel.style.transform = `translateX(-${slideActual * 100}%)`;
  document.querySelectorAll(".indicador").forEach((ind, i) => {
    ind.classList.toggle("activo", i === slideActual);
  });
}

function irASlide(i) {
  slideActual = i;
  actualizarCarrusel();
}

document.getElementById("carrusel-prev").addEventListener("click", () => {
  slideActual = (slideActual - 1 + slides.length) % slides.length;
  actualizarCarrusel();
});

document.getElementById("carrusel-next").addEventListener("click", () => {
  slideActual = (slideActual + 1) % slides.length;
  actualizarCarrusel();
});

setInterval(() => {
  slideActual = (slideActual + 1) % slides.length;
  actualizarCarrusel();
}, 5000);

// ============================================
// 9. NUEVOS LANZAMIENTOS
// ============================================
function renderizarLanzamientos() {
  lanzamientosScroll.innerHTML = "";
  const ultimos = [...productos].reverse().slice(0, 6);

  ultimos.forEach(p => {
    const card = document.createElement("div");
    card.className = "producto-card";
    card.innerHTML = `
      <div class="producto-imagen">
        <img src="${p.img}" alt="${p.nombre}" loading="lazy">
      </div>
      <div class="producto-info">
        <h3>${p.nombre}</h3>
        <p class="producto-marca">${p.marca}</p>
        <p class="producto-precio">$${p.precio}</p>
      </div>
    `;
    lanzamientosScroll.appendChild(card);
  });
}

// ============================================
// 10. FAVORITOS
// ============================================
function toggleFavorito(id, nombre) {
  const idx = favoritos.indexOf(id);
  if (idx > -1) {
    favoritos.splice(idx, 1);
    mostrarToast(`Eliminado de favoritos: ${nombre}`, "error");
  } else {
    favoritos.push(id);
    mostrarToast(`Añadido a favoritos: ${nombre}`);
  }
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  actualizarContadorFavoritos();
  aplicarFiltros();
}

function actualizarContadorFavoritos() {
  contadorFavoritos.textContent = favoritos.length;
  btnFavoritos.classList.toggle("activo", favoritos.length > 0);
}

btnFavoritos.addEventListener("click", () => {
  if (favoritos.length === 0) {
    mostrarToast("No tienes favoritos aún", "error");
    return;
  }
  const favs = productos.filter(p => favoritos.includes(p.id));
  renderizarProductos(favs);
  document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  mostrarToast(`Mostrando ${favoritos.length} favoritos`);
});

// ============================================
// 11. TOASTS
// ============================================
function mostrarToast(mensaje, tipo = "exito") {
  const toast = document.createElement("div");
  toast.className = `toast ${tipo}`;
  toast.textContent = mensaje;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideOut 0.3s ease forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================
// 12. LOGIN (validación visual)
// ============================================
document.getElementById("form-login").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value.trim();
  const pass = document.getElementById("login-password").value.trim();
  const tipo = document.getElementById("login-tipo").value;
  const mensaje = document.getElementById("mensaje-login");

  if (!email || !pass || !tipo) {
    mensaje.textContent = "⚠️ Completa todos los campos";
    mensaje.className = "mensaje error";
    mostrarToast("Completa todos los campos", "error");
    return;
  }

  mensaje.textContent = `✅ Bienvenido a We Got Kicks, cliente ${tipo}`;
  mensaje.className = "mensaje exito";
  mostrarToast(`Sesión iniciada como ${tipo}`);
  e.target.reset();
});

// ============================================
// 13. CONTACTO
// ============================================
document.getElementById("form-contacto").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("contacto-nombre").value.trim();
  const email = document.getElementById("contacto-email").value.trim();
  const mensaje = document.getElementById("contacto-mensaje").value.trim();
  const respuesta = document.getElementById("mensaje-contacto");

  if (!nombre || !email || !mensaje) {
    respuesta.textContent = "⚠️ Todos los campos son obligatorios";
    respuesta.className = "mensaje error";
    return;
  }

  respuesta.textContent = `✅ Gracias ${nombre}, te contactaremos pronto`;
  respuesta.className = "mensaje exito";
  mostrarToast("Mensaje enviado correctamente");
  e.target.reset();
});

// ============================================
// 14. BARRA SUPERIOR CERRABLE
// ============================================
document.getElementById("cerrar-topbar").addEventListener("click", () => {
  document.querySelector(".top-bar").style.display = "none";
});

// ============================================
// 15. BOTÓN VOLVER ARRIBA
// ============================================
window.addEventListener("scroll", () => {
  btnTop.classList.toggle("visible", window.scrollY > 400);
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============================================
// 16. INICIALIZACIÓN
// ============================================
renderizarCarrusel();
renderizarLanzamientos();
renderizarProductos(productos);
actualizarContadorFavoritos();