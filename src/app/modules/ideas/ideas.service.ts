import { Idea } from "@prisma/client"
import prisma from "../../utils/prisma"
import AppError from "../../errors/AppError"
import httpStatus from "http-status"

const CreateIdea = async(payload:Idea)=>{
    const isUserExist = await prisma.user.findUnique(
        {
            where:{
                id:payload.userId 
            }
        }
    )
    if(!isUserExist){
        throw new AppError(httpStatus.NOT_FOUND,"user not found")
    }

    const result = await prisma.idea.create(
        {
            data:payload
        }
    )
    return result
}
const GetAllIdea = async()=>{
    const reuslt = await prisma.idea.findMany({})
    return reuslt
}
const GetSingleIdea = async(id:string)=>{
    const isExistIdea = prisma.idea.findUnique(
        {
            where:{
                id:id
            }
        }
    )
    if(!isExistIdea){
        throw new AppError(httpStatus.CONFLICT,"invalid Idea ID")
    }
    const result = await prisma.idea.findUnique({
        where:{id}
    })
    return result
}
const UpdateIdea = async(id:string,payload:Idea)=>{
    const isExistIdea = prisma.idea.findUnique(
        {
            where:{
                id:id
            }
        }
    )
    if(!isExistIdea){
        throw new AppError(httpStatus.CONFLICT,"invalid Idea ID")
    }
    const reuslt = await prisma.idea.update(
        {
            where:{
                id:id
            },
            data:payload
        }
    )
    return reuslt
}
const DeleteIdea = async (id: string) => {
    const isExistIdea = await prisma.idea.findUnique({
      where: {
        id: id,
      },
    });
  
    if (!isExistIdea) {
      throw new AppError(httpStatus.CONFLICT, "Invalid Idea ID");
    }
  
    const result = await prisma.idea.delete({
      where: {
        id: id,
      },
    });
  
    return result;
  };
const IdeaService = {
    CreateIdea,
    GetAllIdea,
    GetSingleIdea,
    UpdateIdea,
    DeleteIdea
}
export default IdeaService