// Create Web Server and listen to port 3000
// Create a route for /comments
// When user visits /comments, return a json object with a list of comments

const express = require("express");
const app = express();

app.get("/comments", (req, res) => {
  res.json({
    comments: [
      { username: "Alice", comment: "I love apples!" },
      { username: "Bob", comment: "Where is the apple tree?" },
      { username: "Eve", comment: "I want to eat an apple." }
    ]
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// Run this file using node comments.js
// Visit http://localhost:3000/comments in your browser
// You should see a json object with a list of comments