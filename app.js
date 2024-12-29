import express from "express";
import path from "path";

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.resolve("public")));

// Define the root route
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
