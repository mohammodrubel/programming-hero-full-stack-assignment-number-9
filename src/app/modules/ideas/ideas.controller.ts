import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import IdeaService from "./ideas.service";

const CreateIdea = catchAsync(async(req,res)=>{
    const result = await IdeaService.CreateIdea(req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Created New Idea Successful',
        data: result,
      });
})

const GetAllIdea = catchAsync(async(req,res)=>{
    const result = await IdeaService.GetAllIdea()
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Idea retrieve successful',
        data: result,
      });
})

const GetSingleIdea = catchAsync(async(req,res)=>{
    const result = await IdeaService.GetSingleIdea(req.params?.id)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Idea retrieve successful',
        data: result,
      });
})

const UpdateIdea = catchAsync(async(req,res)=>{
    const result = await IdeaService.UpdateIdea(req.params?.id,req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Idea update successful',
        data: result,
      });
})

const DeleteIdea = catchAsync(async(req,res)=>{
    const result = await IdeaService.DeleteIdea(req.params?.id)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Idea delete successful',
        data: result,
      });
})


const IdeaController = {
    CreateIdea,
    GetAllIdea,
    GetSingleIdea,
    UpdateIdea,
    DeleteIdea
}
export default IdeaController