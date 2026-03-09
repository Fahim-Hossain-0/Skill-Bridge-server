import { Booking } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";



const createBooking = async (data: any, userId: string) => {

  const result = await prisma.booking.create({
    data: {
      date: new Date(data.date),
      startTime: data.startTime,
      endTime: data.endTime,
      categoryId: data.categoryId,
     studentId:userId ,
     tutorProfileId: data.tutorProfileId,
    }
  });

  return result;
};



export const bookingService = {
    createBooking
}