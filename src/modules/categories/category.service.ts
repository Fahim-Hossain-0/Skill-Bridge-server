import { prisma } from "../../lib/prisma"

const createCategory = async({name}: {name: string}) => {
    const result = await prisma.category.create({
        data:{
            name:name
        }
    })
;
    return result;
}

export const categoryService = {
    createCategory
}