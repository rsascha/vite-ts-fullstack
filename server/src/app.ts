import express, { Request, Response } from "express";
import { getUser } from "./functions";

const app = express();

app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
  console.debug("GET", req.path);
  const user = getUser();
  res.json(user);
});

if (process.env.NODE_ENV !== "development") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export const viteNodeApp = app;
