const mysql = require('mysql');

// create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore'
});

// retrieve all books from the database
function getAllBooks(callback) {
  const sql = 'SELECT * FROM books';
  pool.query(sql, (error, results) => {
    if (error) {
      return callback(error);
    }
    callback(null, results);
  });
}

// retrieve a book by its ID
function getBookById(id, callback) {
  const sql = 'SELECT * FROM books WHERE id = ?';
  pool.query(sql, [id], (error, results) => {
    if (error) {
      return callback(error);
    }
    if (results.length === 0) {
      return callback(new Error(`Book with ID ${id} not found`));
    }
    callback(null, results[0]);
  });
}

// add a new book to the database
function addBook(title, author, price, image, callback) {
  const sql = 'INSERT INTO books (title, author, price, image) VALUES (?, ?, ?, ?)';
  const values = [title, author, price, image];
  pool.query(sql, values, (error, results) => {
    if (error) {
      return callback(error);
    }
    callback(null, results.insertId);
  });
}

// export the functions for use in other modules
module.exports = {
  getAllBooks,
  getBookById,
  addBook
};
