import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello world from Edit profile's route!");
});

export { router as editProfileRouter };
