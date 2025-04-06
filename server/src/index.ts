import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONICA_URL = process.env.MONICA_API_URL;
const MONICA_API_KEY = process.env.MONICA_API_KEY;
// const config = {
//   method: "get",
//   maxBodyLength: Infinity,
//   url: `${MONICA_URL}/genders`,
//   headers: {
//     Authorization: `Bearer ${MONICA_API_KEY}`,
//   },
// };

// Allow requests from frontend
// const allowedOrigins = [process.env.FRONTEND_URL || "http://localhost:5173"];

app.use(cors());

app.use(express.json());

// //get genders
// axios
//   .request(config)
//   .then((response) => {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Test route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Backend is working! 🚀" });
});

app.get("/genders", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${MONICA_URL}/genders`, {
      headers: {
        Authorization: `Bearer ${MONICA_API_KEY}`,
      },
    });
    res.json(response.data); // Send the API response back to the client
  } catch (error) {
    console.error("Error fetching genders:", error);
    res.status(500).json({ error: "Failed to fetch genders" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
