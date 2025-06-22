-- Insertar cafetería
INSERT INTO Cafeteria (nombre) VALUES ('Café Central');

-- Insertar categorías
INSERT INTO Categoria (cafeteria_id, nombre) VALUES (1, 'Bebidas');
INSERT INTO Categoria (cafeteria_id, nombre) VALUES (1, 'Pastelería');

-- Insertar productos
INSERT INTO Producto (categoria_id, cafeteria_id, codigo, precio, imagen, descripcion, caracteristicas, activo)
VALUES 
(1, 1, 'BEB001', 250.00, 'cafe.jpg', 'Café espresso', 'Intenso y corto', TRUE),
(2, 1, 'PAS001', 300.00, 'tarta.jpg', 'Tarta de manzana', 'Con canela', TRUE);

-- Insertar servicio
INSERT INTO Servicio (nombre, precio, caracteristicas, limite_productos, limite_usuarios, limite_meseros)
VALUES ('Premium', 5000.00, 'Acceso completo', 100, 10, 5);

-- Insertar pago del servicio
INSERT INTO Servicio_Pago (cafeteria_id, servicio_id, fecha_pago, fecha_vencimiento, monto_recibido, monto_cobrado)
VALUES (1, 1, '2025-06-01', '2025-07-01', 5000.00, 5000.00);

-- Insertar salas y mesas
INSERT INTO Sala (cafeteria_id, nombre) VALUES (1, 'Salón principal');
INSERT INTO Mesa (sala_id, nro_mesa) VALUES (1, 10);

-- Insertar mesero
INSERT INTO Mesero (cafeteria_id, nombre, telefono) VALUES (1, 'Juan Pérez', '123456789');

-- Insertar cliente
INSERT INTO Cliente (cafeteria_id, nombre, domicilio, dni) VALUES (1, 'Ana López', 'Calle Falsa 123', '12345678');

-- Insertar roles y permisos
INSERT INTO Rol (nombre) VALUES ('Administrador');
INSERT INTO Permiso (nombre, permiso) VALUES ('Acceso total', 'ALL');
INSERT INTO Rol_Permiso (id_rol, id_permiso) VALUES (1, 1);

-- Insertar usuario
INSERT INTO Usuario (cafeteria_id, rol_id, email, nombre, contraseña)
VALUES (1, 1, 'admin@cafecentral.com', 'Admin Central', '123456');

-- Insertar pedido
INSERT INTO Pedido (mesero_id, cafeteria_id, mesa_id, cliente_id, usuario_id, fecha_pedido, estado, monto_total)
VALUES (1, 1, 1, 1, 1, '2025-06-22 10:30:00', 'completado', 550.00);

-- Insertar detalle del pedido
INSERT INTO Detalle_Pedido (pedido_id, producto_id, precio_unitario, cantidad, subtotal, estado, forma_pago)
VALUES 
(1, 1, 250.00, 1, 250.00, 'servido', 'efectivo'),
(1, 2, 300.00, 1, 300.00, 'servido', 'efectivo');
