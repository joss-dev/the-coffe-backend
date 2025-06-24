CREATE TABLE Cafeteria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE Rol (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50)
);

CREATE TABLE Permiso (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    permiso VARCHAR(100)
);

CREATE TABLE Rol_Permiso (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_rol INT NOT NULL,
    id_permiso INT NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES Rol(id),
    FOREIGN KEY (id_permiso) REFERENCES Permiso(id)
);

CREATE TABLE Categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cafeteria_id INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    FOREIGN KEY (cafeteria_id) REFERENCES Cafeteria(id)
);

CREATE TABLE Producto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria_id INT NOT NULL,
    cafeteria_id INT NOT NULL,
    codigo VARCHAR(50),
    precio DECIMAL(10,2),
    imagen VARCHAR(255),
    descripcion TEXT,
    caracteristicas TEXT,
    activo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (categoria_id) REFERENCES Categoria(id),
    FOREIGN KEY (cafeteria_id) REFERENCES Cafeteria(id)
);

CREATE TABLE Servicio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2),
    caracteristicas TEXT,
    limite_productos INT,
    limite_usuarios INT,
    limite_meseros INT
);

CREATE TABLE Servicio_Pago (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cafeteria_id INT NOT NULL,
    servicio_id INT NOT NULL,
    fecha_pago DATE NOT NULL,
    fecha_vencimiento DATE NOT NULL,
    monto_recibido DECIMAL(10,2),
    monto_cobrado DECIMAL(10,2),
    FOREIGN KEY (cafeteria_id) REFERENCES Cafeteria(id),
    FOREIGN KEY (servicio_id) REFERENCES Servicio(id)
);

CREATE TABLE Mesero (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cafeteria_id INT NOT NULL,
    nombre VARCHAR(100),
    telefono VARCHAR(20),
    FOREIGN KEY (cafeteria_id) REFERENCES Cafeteria(id)
);

CREATE TABLE Sala (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cafeteria_id INT NOT NULL,
    nombre VARCHAR(100),
    FOREIGN KEY (cafeteria_id) REFERENCES Cafeteria(id)
);

CREATE TABLE Mesa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sala_id INT NOT NULL,
    nro_mesa INT NOT NULL,
    FOREIGN KEY (sala_id) REFERENCES Sala(id)
);

CREATE TABLE Cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cafeteria_id INT NOT NULL,
    nombre VARCHAR(100),
    domicilio VARCHAR(200),
    dni VARCHAR(20),
    FOREIGN KEY (cafeteria_id) REFERENCES Cafeteria(id)
);




CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cafeteria_id INT NOT NULL,
    rol_id INT NOT NULL,
    email VARCHAR(100) NOT NULL,
    nombre VARCHAR(100),
    contraseña VARCHAR(255),
    FOREIGN KEY (cafeteria_id) REFERENCES Cafeteria(id),
    FOREIGN KEY (rol_id) REFERENCES Rol(id)
);

CREATE TABLE Pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mesero_id INT,
    cafeteria_id INT NOT NULL,
    mesa_id INT,
    cliente_id INT,
    usuario_id INT,
    fecha_pedido DATETIME NOT NULL,
    estado VARCHAR(50),
    monto_total DECIMAL(10,2),
    FOREIGN KEY (mesero_id) REFERENCES Mesero(id),
    FOREIGN KEY (cafeteria_id) REFERENCES Cafeteria(id),
    FOREIGN KEY (mesa_id) REFERENCES Mesa(id),
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

CREATE TABLE Detalle_Pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT NOT NULL,
    producto_id INT NOT NULL,
    precio_unitario DECIMAL(10,2),
    cantidad INT,
    subtotal DECIMAL(10,2),
    estado VARCHAR(50),
    forma_pago VARCHAR(50),
    FOREIGN KEY (pedido_id) REFERENCES Pedido(id),
    FOREIGN KEY (producto_id) REFERENCES Producto(id)
);



