// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('PLP_Bookstore');

// Create a new document in the collection.
db.getCollection('books').insertMany([
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    price: 10.99,
    pages: 180,
    in_stock: true,
    publisher: 'Scribner',
    location: 'New York'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    price: 7.99,
    pages: 281,
    in_stock: true,
    publisher: 'J.B. Lippincott & Co.',
    location: 'Philadelphia'
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Dystopian',
    price: 8.99,
    pages: 328,
    in_stock: false,
    publisher: 'Secker & Warburg',
    location: 'London'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Romance',
    price: 6.99,
    pages: 279,
    in_stock: true,
    publisher: 'T. Egerton',
    location: 'London'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    price: 9.99,
    pages: 214,
    in_stock: false,
    publisher: 'Little, Brown and Company',
    location: 'Boston'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    price: 12.99,
    pages: 310,
    in_stock: true,
    publisher: 'George Allen & Unwin',
    location: 'London'
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    year: 1953,
    genre: 'Dystopian',
    price: 11.99,
    pages: 194,
    in_stock: true,
    publisher: 'Ballantine Books',
    location: 'New York'
  },
  {
    title: 'Moby',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    price: 14.99,
    pages: 585,
    in_stock: false,
    publisher: 'Harper & Brothers',
    location: 'New York'
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    year: 1869,
    genre: 'Historical Fiction',
    price: 13.99,
    pages: 1225,
    in_stock: true,
    publisher: 'The Russian Messenger',
    location: 'Moscow'
  }
]);
