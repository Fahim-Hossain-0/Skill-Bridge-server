import { Router } from "express";
import { bookingController } from "./booking.controller";

const router = Router()

router.post("/",bookingController.createPost)

export const postRouter = router;