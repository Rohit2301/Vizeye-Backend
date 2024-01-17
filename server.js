if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/.env.local" });
}
// if (process.env.NODE_ENV === "production") {
//   const path = require("path");
//   app.use(express.static(path.resolve(__dirname, "frontend", "build")));
//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(__dirname, "frontend", "build", "index.html"),
//       function (err) {
//         if (err) {
//           res.status(500).send(err);
//         }
//       }
//     );
//   });
// }
const app = require("./app");
const connectDatabase = require("./config/connectDb");
const PORT = process.env.PORT || 4000;

// UncaughtException Error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  process.exit(1);
});

// connectDatabase();

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
