require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 5000; // 更改端口为 5001

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
