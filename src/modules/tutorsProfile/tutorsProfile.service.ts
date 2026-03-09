import { prisma } from "../../lib/prisma"

const createTutorProfile = async (payload: any, userId: string) => {

     const existingTutor = await prisma.tutorProfile.findUnique({
    where: { userId }
  });

  if (existingTutor) {
    throw new Error("Tutor profile already exists");
  }

const result = await prisma.$transaction(async(tx)=>{
    const tutorProfile = await tx.tutorProfile.create({
        data:{
            userId,
            bio:payload.bio,
            image:payload.image,
            hourlyRate:payload.hourlyRate,
            education:payload.education,
        }
    });
    await tx.user.update({
        where:{
            id:userId
        },
        data:{
            role:"TUTOR"
        }
        });  if (payload.subjects && payload.subjects.length) {
      await tx.tutorSubject.createMany({
        data: payload.subjects.map((categoryId: string) => ({
          tutorProfileId: tutorProfile.id,
          categoryId
        }))
      });
    }

    return tutorProfile;
  });

  return result;
};
export const tutorsProfileService = {
    createTutorProfile
}
