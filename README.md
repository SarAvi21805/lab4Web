# 📦 Sistema de Gestión de Inventario (Job Simulator - Senior)

Este proyecto es una solución Full-Stack para la gestión de productos, desarrollada como parte de una evaluación técnica. Se ha implementado siguiendo estándares de nivel **Senior**, priorizando la arquitectura limpia, la contenedorización y las mejores prácticas de API REST.

## 🚀 Tecnologías utilizadas
- **Backend:** Node.js con Express.js.
- **Base de Datos:** PostgreSQL 15.
- **Infraestructura:** Docker y Docker Compose.
- **Frontend:** HTML5, Tailwind CSS y JavaScript Vanilla (ES6+ Modules).

## 🛠️ Decisiones de Arquitectura (Nivel Senior)
1. **Containerización Total:** Se utiliza Docker para asegurar la paridad entre entornos. La base de datos y la API están orquestadas mediante `docker-compose`.
2. **Inicialización Automatizada:** Se implementó un script `init.sql` que Docker ejecuta automáticamente para crear tablas e insertar datos de prueba al iniciar el contenedor de base de datos.
3. **Persistencia y Pooling:** Uso de `pg-pool` en el backend para un manejo eficiente de conexiones a PostgreSQL.
4. **API REST Profesional:** 
   - Implementación de **PATCH** para actualizaciones parciales de recursos (Requisito Senior).
   - Separación de responsabilidades en capas: Rutas, Controladores y Configuración.
   - Manejo de CORS integrado para comunicación segura con el frontend.
5. **Historial de Git:** Commits atómicos y descriptivos siguiendo la convención *Conventional Commits*.

## 📋 Requisitos previos
- Docker Desktop instalado.
- Node.js (opcional para desarrollo local, no requerido si se usa Docker).

## ⚡ Instalación y Ejecución rápida

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/SarAvi21805/lab4Web
   cd lab4Web

2. Levantar la infraestructura con Docker:
   ```bash
   docker-compose up --build

3. Acceder a la aplicación:
   - API: http://localhost:3000/api/products
   - Frontend: Abrir frontend/public/index.html (Usar un servidor local como Live Server, recomendación).

## 🔗 Endpoints de la API

- `GET /api/products` - Listar todos los productos.
- `GET /api/products/:id` - Obtener un producto específico (necesario para edición).
- `POST /api/products` - Crear un nuevo producto.
- `PUT /api/products/:id` - Actualización total.
- `PATCH /api/products/:id` - Actualización parcial (Requisito Senior).
- `DELETE /api/products/:id` - Eliminar producto.