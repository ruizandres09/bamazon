-- Drop the bamazon database if it exist currently--

DROP DATABASE IF EXISTS bamazon;

-- CREATE the "bamazon" database--

CREATE DATABASE bamazon;

USE bamazon;

-- Create the table "products" within bamazon database --

CREATE TABLE products (
     ITEM_ID INTEGER(11) AUTO_INCREMENT NOT NULL,
     Product_Name VARCHAR(50),
     Department_Name VARCHAR(50),
     Price DECIMAL (9,2),
     Stock_Quantity INT(100),
     PRIMARY KEY (ITEM_ID)
);


-- Adding data to tables--
-- Selecting all of the table columns--
SELECT *
-- Defining which table
FROM products;
INSERT INTO products (Product_Name, Department_Name,Price,Stock_Quantity)
-- Inserting Mock data below in order to match its respective column
VALUES 
("3DPrinter","Industrial&Scientific",249.99,5),
("3DScanner","Industrial&Scientific",661.00,19),
("Laser Printer","Tools",3995.00,120),
("Lenovo Laptop", "Electronics",2049.99,8),
("60 in. TV", "Electronics", 488.00,30),
("S20 Samsung Galaxy","Electronics",799.99, 120),
("Vizio Sound Bar", "Electronics",179.99,80),
("Washer and Dryer Combo","Appliances",1729.00,15),
("18 in Racing Wheels","Automotive",154.58,60),
("Tig/Stick Welder","Tools",798.00,40);
