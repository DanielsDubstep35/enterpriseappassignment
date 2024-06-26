import express from "express";
import cors from "cors";
import router from "./routes/movie.js";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

// start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
