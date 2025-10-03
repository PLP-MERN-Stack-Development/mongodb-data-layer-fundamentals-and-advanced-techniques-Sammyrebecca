# 📚 MongoDB Bookstore Project

This project demonstrates MongoDB CRUD operations, advanced queries, aggregation pipelines, and indexing using a sample collection of books.

## 📦 Contents

- [`insert_books.js`](insert_books.js) – Inserts sample book data into the database
- [`queries.js`](queries.js) – Contains MongoDB shell queries for:
  - Basic CRUD operations
  - Advanced queries (projection, sorting, pagination)
  - Aggregation pipelines
  - Index creation and performance analysis

---

## 🚀 Getting Started

### 1. Start MongoDB Shell

If using locally:
```bash
mongosh
```
Or connect to Atlas:
```bash
mongosh "mongodb+srv://<username>:<password>@cluster.mongodb.net/myDatabase"
use bookstore
```

### 2. Insert Sample Data

Run the following in the shell to populate your database:
```js
load('insert_books.js')
```

### 3. Run Queries

Open [`queries.js`](queries.js) and copy-paste queries into the shell to explore:

- Find books by genre, author, or year
- Update and delete book records
- Sort, paginate, and project fields
- Aggregate data (average price, books per decade, top author)
- Create and analyze indexes

---

## 📝 Notes

- Make sure your MongoDB server is running and you are using the correct database (`bookstore`).
- Sample data includes a variety of genres, years, and authors for demonstration.
## Screenshot
Below is my MongoDB screenshot showing 'PLP_Bookstore' database and 'books' collection. 
![MongoDB Screenshot] (<Screenshot (2).png>)
## 📖 License

This project is for educational purposes.
