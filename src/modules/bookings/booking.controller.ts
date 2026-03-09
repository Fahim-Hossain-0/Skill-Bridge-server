import { NextFunction, Request, Response } from "express"
import { bookingService } from "./booking.service"

const createPost = async (req:Request, res:Response, next: NextFunction) => {
   try {

    const result = await bookingService.createBooking(req.body)
    res.status(201).json(result)
   } catch (error) {
        next(error)
    }
}   

export const bookingController = { 
    createPost
}