import { prisma } from "./lib/prisma";

const run = async () => {
//   const user = await prisma.user.create({
//     data: {
//       email: "elsa@prisma.io",
//       name: "Elsa Prisma",
//       password:"123456/",
//       image: "https://example.com/tutor1.jpg",
//     },
//   });
//   console.log(user);

// const booking = await prisma.booking.create({
//     data: {
//     studentId: "280c7570-9e4c-4001-95a6-f2ee22ca87b7",   // existing user id
//     tutorId: "280c7570-9e4c-4001-95a6-f2ee22ca87b7",
//     categoryId: "349dcfbb-bb62-4213-bcb2-c7e1cdc24a1d",

//     date: new Date("2026-03-20"),
//     startTime: "3am",
//     endTime: "4am",
//   },
// })

// console.log(booking);

// const tutorProfile = await prisma.tutorProfile.create({
    
//  data: {
//     userId: "280c7570-9e4c-4001-95a6-f2ee22ca87b7",   // existing User id
//     bio: "Experienced Math tutor with 5 years of teaching experience.",
//     image: "https://example.com/tutor1.jpg",
//     hourlyRate: 500,
//     education: "BSc in Mathematics, University of Dhaka"
//   }
// });

// console.log(tutorProfile);

// const category = await prisma.category.create({
//     data:{
//          name:"math"

//     }
// })
// console.log(category);
// const user = await prisma.user.findMany({
//   select:{
//     id:true,
//     tutorBookings:true,
//     // studentBookings:true
//   }
// })
// console.dir(user,{depth:Infinity});

const updateProfile = await prisma.tutorProfile.update({
  where:{
   id:"333b1259-3c43-4a4f-a077-982708fcc859"
  },
  data:{
    education:"dev"
  }
})
}

run();
