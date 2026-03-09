import express from "express"
import { postRouter } from "./modules/bookings/booking.router"
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from "cors"
import { categoryRouter } from "./modules/categories/category.router";
const app = express()
app.use(express.json())

app.use(cors({
    origin: process.env.APP_URL || "http://localhost:4000", // client side url
    credentials: true
}))

app.all("/api/auth/*splat", toNodeHandler(auth));

// bookings----

app.use("/bookings",postRouter)

// category API

app.use("/categories",categoryRouter)

app.get("/", (req, res) => {
    res.send("Hello World!")
})

export default app