import { Comment } from "@prisma/client"
import prisma from "../../utils/prisma"
import AppError from "../../errors/AppError"
import httpStatus from "http-status"

const CreateNewComments = async (payload: Comment) => {
    const isUserExist = await prisma.user.findUnique(
        {
            where: {
                id: payload.userId
            }
        }
    )
    if (!isUserExist) {
        throw new AppError(httpStatus.CONFLICT, "invalid user id")
    }
    const result = await prisma.comment.create(
        {
            data: payload
        }
    )
    return result

}
const GetAllComments = async () => {
    const result = await prisma.comment.findMany({})
    return result
}
const GetSingleComments = async (id: string) => {
    const result = await prisma.comment.findFirstOrThrow(
        { where: { id } }
    )
    return result
}
const UpdateComments = async (id: string, payload: Comment) => {
    const isUserExist = await prisma.user.findUnique(
        {
            where: {
                id: payload.userId
            }
        }
    )
    if (!isUserExist) {
        throw new AppError(httpStatus.CONFLICT, "invalid user id")
    }
    const result = await prisma.comment.update(
        {
            where: {
                id: id
            },
            data: payload
        }
    )
    return result
}
const DeleteComments = async (id: string) => {
    const result = await prisma.comment.delete(
        {
            where: {
                id
            }
        }

    )
    return result
}

const CommentsService = {
    CreateNewComments,
    GetAllComments,
    GetSingleComments,
    UpdateComments,
    DeleteComments
}

export default CommentsService