import { Booking } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createBooking = async(data:Omit<Booking, 'id' | 'createdAt' | 'updatedAt' | 'authorId'>, userId: string)=>{
const result = await prisma.booking.create({
    data:{
        ...data,
         date: new Date(data.date)
      
    }
});
console.log(result);
return result;
}

export const bookingService = {
    createBooking
}