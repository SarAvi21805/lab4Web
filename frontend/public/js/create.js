import { create } from "./api.js";

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = document.getElementById("submit-btn");
  btn.disabled = true;
  btn.textContent = "Creando...";

  const data = new FormData(e.target);
  // Mapeo de los campos del formulario
  const payload = {
    name: data.get("name"),
    description: data.get("description"),
    price: parseFloat(data.get("price")),
    stock: parseInt(data.get("stock"), 10),
  };

  try {
    await create(payload);
    window.location.href = "index.html";
  } catch (e) {
    const errEl = document.getElementById("error");
    errEl.textContent = `Error al crear el producto: ${e.message}`;
    errEl.classList.remove("hidden");
    btn.disabled = false;
    btn.textContent = "Crear producto";  }
});