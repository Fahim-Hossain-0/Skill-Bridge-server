import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { categoryService } from "./category.service";

const createCategory = async(req:Request,res:Response)=>{
    try {
        const {name} = req.body;
        if(!name){
            return res.status(400).json({
                error:"Name is required!"
            })
        }
        const result = await categoryService.createCategory({ name });
        res.status(201).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Failed to create category!"
        })
    }
}

export const categoryController = {
    createCategory
}