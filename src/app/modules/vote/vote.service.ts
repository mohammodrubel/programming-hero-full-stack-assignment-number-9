import { Vote } from "@prisma/client"
import prisma from "../../utils/prisma"
import AppError from "../../errors/AppError"
import httpStatus from "http-status"

const AddedNewVote = async(payload:Vote)=>{
    const isExistIdea = await prisma.idea.findUnique(
        {
            where:{
                id:payload.ideaId
            }
        }
    )

    const isExisUserId = await prisma.user.findFirstOrThrow(
        {
            where:{
                id:payload.userId
            }
        }
    )

    if(!isExisUserId || !isExistIdea){
        throw new AppError(httpStatus.CONFLICT,'User id or Idea id invalid!')
    }

    const reuslt = await prisma.vote.create(
        {
            data:payload
        }
    )
    return reuslt 
}
const GetSingleVote = async(id:string)=>{
    const reuslt = await prisma.vote.findFirstOrThrow(
        {
            where:{
                id:id 
            }
        }
    )
    return reuslt
}
const GetAllVote = async()=>{
    const result = await prisma.vote.findMany()
    return result
}
const UpdateSingleVote = async(id:string,payload:Vote)=>{
    const reuslt = await prisma.vote.update({
        where:{
            id:id 
        },
        data:payload
    })
    return reuslt
}
const DeleteSingleVote = async(id:string)=>{
    const reuslt = await prisma.vote.delete(
        {
            where:{
                id:id 
            }
        }
    )
    return reuslt
}
const VoteService = {
    AddedNewVote,
    GetSingleVote,
    GetAllVote,
    UpdateSingleVote,
    DeleteSingleVote
}


export default VoteService