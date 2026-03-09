import { NextFunction, Request, Response } from "express";
import { tutorsProfileService } from "./tutorsProfile.service";

const crateTutorsProfile = async (req:Request, res:Response, next: NextFunction) => {
    try {
        const userId = req.user?.id;
    
        if (!userId) {
            return res.status(400).json({
                error: "Unauthorized!",
            })
        }
        const result = await tutorsProfileService.createTutorProfile(req.body,userId)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}

export const tutorsProfileController = {
    crateTutorsProfile
}