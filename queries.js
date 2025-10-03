// find all books in the "Fantasy" genre
db.books.find({ genre: "Fantasy" });
 

db.books.find({ published_year: { $gt: 1851 } });
 // Find all books published after the year 1850


db.books.find({ published_year: { $gt: 2015 } });
kdb.books.find({ author: "'F. Scott Fitzgerald'," });
// Find all books by "F. Scott Fitzgerald"

//update the price of "1984" to 12.99
db.books.updateOne(
 { title: "1984" },
  { $set: { price: 12.99 } }
);

// delete the book titled "The Vanishing Half"
db.books.deleteOne({ title: "Moby" });

// Find all books that are in stock and published after 1869
db.books.find({
  in_stock: true,
  published_year: { $gt: 1869 }
});

// Return only the title, author, and price fields
db.books.find(
  { in_stock: true, published_year: { $gt: 1869 } },
  { title: 1, author: 1, price: 1, _id: 0 }
);

// Sort all books by price in ascending order
db.books.find().sort({ price: 1 });

//sort all books by price in descending order
db.books.find().sort({ price: -1 });

//limit the results to 5 books
db.books.find().limit(5);

// skip the first 5 books and return the next 5 books
db.books.find().skip(5).limit(5);

// Find the average price of books in each genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      avgPrice: { $avg: "$price" },
      count: { $sum: 1 }
    }
  }
]);

// Find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]);

// Find the total number of books published in each decade
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

// Create an index on the title field to optimize search queries by title
db.books.createIndex({ title: 1 });

// Create a compound index on author and published_year to optimize queries filtering by author and sorting by year
db.books.createIndex({ author: 1, published_year: -1
 });
 
 // Explain the query plan for searching books by title
 db.books.find({ title: "1984" }).explain("executionStats");




