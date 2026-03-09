import { Router } from "express";
import { tutorsProfileController } from "./tutorsProfile.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = Router()

router.post("/",auth(UserRole.STUDENT),tutorsProfileController.crateTutorsProfile)

export const tutorsProfileRouter = router;