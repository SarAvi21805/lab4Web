/** Alejandra Avilés - 24722
 *  Configuración de la conexión a PostgreSQL mediante un Pool para eficientar múltiples conexiones.
 */

const { Pool } = require('pg');
require('dotenv').config();

// URL de la base de datos que vendrá del .env o de Docker
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;