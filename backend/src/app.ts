// File with the principal config and directions of my project
import express from "express";
import cors from "cors";

// Routes' files
import { homeRouter } from "./routes/home";
import { editProfileRouter } from "./routes/editProfile";
import { loginRouter } from "./routes/login";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/home", homeRouter);
app.use("/api/login", loginRouter);
app.use("/api/edit-profile", editProfileRouter);

// Export app to use in index.ts' file
export default app;
