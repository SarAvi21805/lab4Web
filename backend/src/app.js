const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors()); // Para conectar el frontend
app.use(express.json()); // Para entiender body en formato JSON

// Rutas
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Senior corriendo en puerto ${PORT}`);
});