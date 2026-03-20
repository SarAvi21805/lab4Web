/** Alejandra Avilés - 24722
 *  Creación de la tabla automáticamente cuando Docker levante la BD por 1ra vez.
 */

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, description, price, stock) VALUES
('Laptop Pro', 'Potente para desarrollo', 1200.00, 10),
('Mouse Gamer', 'RGB y 12000 DPI', 45.00, 30);