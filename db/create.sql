--CREATE DATABASE
CREATE DATABASE IF NOT EXISTS shop_db;

USE shop_db;

-- CREATE SUPPLIER TABLE
CREATE TABLE IF NOT EXISTS supplier (
    supplierId INT AUTO_INCREMENT PRIMARY KEY,
    supplierName VARCHAR(100) NOT NULL,
    contactInfo VARCHAR(300)
);

-- CREATE PRODUCT TABLE

CREATE TABLE IF NOT EXISTS products (
    productId INT AUTO_INCREMENT PRIMARY KEY,
    productName VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    quantity INT DEFAULT 0,
    lastUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    supplierId INT,
    FOREIGN KEY (supplierId) REFERENCES supplier (supplierId)
);

-- FILL SUPPLIER TABLE
INSERT INTO
    supplier (supplierName, contactInfo)
VALUES ('H&M', 'HM@shop.com'),
    (
        'POWER',
        'powerMalmo@gmail.com'
    ),
    ('ICA', 'ICAfood@hotmail.com');

INSERT INTO
    products (
        productName,
        price,
        quantity,
        supplierId
    )
VALUES ('Shirt', 20, 10, 1),
    ('Hat', 10, 5, 1),
    ('iPhone', 12000, 100, 2),
    ('Hairdryer', 600, 70, 2),
    ('Tomato', 2, 1000, 3);