CREATE DATABASE library_db;

USE library_db;

CREATE TABLE book (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(10) NOT NULL,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    stock INT NOT NULL
);

CREATE TABLE member (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(10) NOT NULL,
    name VARCHAR(255) NOT NULL,
    borrowedBooksCount INT DEFAULT 0,
    penaltyEndDate DATETIME NULL
);

INSERT INTO book (code, title, author, stock) VALUES 
('JK-45', 'Harry Potter', 'J.K Rowling', 1),
('SHR-1', 'A Study in Scarlet', 'Arthur Conan Doyle', 1),
('TW-11', 'Twilight', 'Stephenie Meyer', 1),
('HOB-83', 'The Hobbit, or There and Back Again', 'J.R.R. Tolkien', 1),
('NRN-7', 'The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 1);


INSERT INTO member (code, name) VALUES 
('M001', 'Angga'),
('M002', 'Ferry'),
('M003', 'Putri');

