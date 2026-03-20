import { getOne, update } from "./api.js";

const id = new URLSearchParams(window.location.search).get("id");

async function load() {
  try {
    const r = await getOne(id);
    const form = document.getElementById("form");
    form.name.value = r.name;
    form.description.value = r.description;
    form.price.value = r.price;
    form.stock.value = r.stock;
  } catch (e) {
    const errEl = document.getElementById("error");
    errEl.textContent = `Error al cargar el producto: ${e.message}`;
    errEl.classList.remove("hidden");
  }
}

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = document.getElementById("submit-btn");
  btn.disabled = true;
  btn.textContent = "Guardando...";

  const data = new FormData(e.target);
  const payload = {
    name: data.get("name"),
    description: data.get("description"),
    price: parseFloat(data.get("price")),
    stock: parseInt(data.get("stock"), 10),
  };

  try {
    await update(id, payload);
    window.location.href = "index.html";
  } catch (e) {
    const errEl = document.getElementById("error");
    errEl.textContent = `Error al actualizar: ${e.message}`;
    errEl.classList.remove("hidden");
    btn.disabled = false;
    btn.textContent = "Guardar cambios";  }
});

load();