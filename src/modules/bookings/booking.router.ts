import { Router } from "express";
import { bookingController } from "./booking.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = Router()

router.post("/",auth(UserRole.STUDENT), bookingController.createBooking)

export const postRouter = router;