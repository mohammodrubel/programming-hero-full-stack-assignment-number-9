import { Category } from "@prisma/client"
import httpStatus from "http-status"
import AppError from "../../errors/AppError"
import prisma from "../../utils/prisma"

const CreateCategory = async (payload: Category) => {
    const data = await prisma.user.findUnique({
        where: {
            id: payload.userId as string,
            is_deleted: false,
            role: 'ADMIN'
        }
    });

    if (!data) {
        throw new AppError(httpStatus.FORBIDDEN, 'Admin access required');
    }
    const result = prisma.category.create(
        {
            data: payload
        }
    )
    return result
}
const GetAllCategory = async () => {
    const result = await prisma.category.findMany({})
    return result
}
const GetSingleCategory = async (id: string,) => {
    

    // Get the category
    const category = await prisma.category.findUnique({
        where: {
            id: id,
        }
    });

    if (!category) {
        throw new AppError(httpStatus.NOT_FOUND, 'Category not found');
    }

    return category;
}
const UpdateCategory = async (adminId: string, payload: Category) => {
    const admin = await prisma.user.findUnique({
        where: {
            id: adminId,
            is_deleted: false,
            role: 'ADMIN'
        }
    });

    if (!admin) {
        throw new AppError(httpStatus.FORBIDDEN, 'Admin access required');
    }

    // Get the category
    const category = await prisma.category.update({
        where: {
            id: payload.id,
        },
        data: payload
    });

    return category

}
const DeleteCategory = async (id: string) => {
    const admin = await prisma.user.findUnique({
        where: {
            id: id,
            is_deleted: false,
            role: 'ADMIN'
        }
    });

    if (!admin) {
        throw new AppError(httpStatus.FORBIDDEN, 'Admin access required');
    }
    const reuslt = await prisma.category.delete(
        {
            where: {
                id: id
            }
        }
    )
    return reuslt
}



const CategoryService = {
    CreateCategory,
    GetAllCategory,
    GetSingleCategory,
    UpdateCategory,
    DeleteCategory
}

export default CategoryService