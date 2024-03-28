import "dotenv/config";
import cors from "cors";
import app from "./app";

const PORT = process.env.PORT || 3001;

app.use(cors());
app.listen(PORT, () => {
  console.log("This app is running on port: " + PORT);
  console.log(`http://localhost:${PORT}`);
});

// TODO: The .env's file must be in the source directory "../src"