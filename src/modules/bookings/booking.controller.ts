import { NextFunction, Request, Response } from "express"
import { bookingService } from "./booking.service"

const createBooking = async (req:Request, res:Response, next: NextFunction) => {
   try {
        const user = req.user;
        if (!user) {
            return res.status(400).json({
                error: "Unauthorized!",
            })
        }
    const result = await bookingService.createBooking(req.body,user.id)
    res.status(201).json(result)
   } catch (error) {
        next(error)
    }
}   

export const bookingController = { 
    createBooking
}
    
