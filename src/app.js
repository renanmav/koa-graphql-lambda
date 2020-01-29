import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const router = express.Router();

router.use(cors());
router.use(bodyParser.json());

router.get("/health", (req, res) => {
  return res.json({ response: "Good to go" });
});

app.use("/", router);

export default app;
