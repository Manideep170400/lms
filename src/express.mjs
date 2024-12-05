import express from "express";
import mongooseDB from "./BACKEND/mongoose.mjs";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongooseDB(app);

app.listen(port, () => {
  console.log(`server is connecting http://localhost:${port}`);
});
