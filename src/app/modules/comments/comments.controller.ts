import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import CommentsService from "./comments.service";

const CreateNewComments = catchAsync(async (req, res) => {
    const result = await CommentsService.CreateNewComments(req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: 'added comments successful',
        data: result,
    });
})

const GetAllComments = catchAsync(async (req, res) => {
    const result = await CommentsService.GetAllComments()
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Comments retrieve successful',
        data: result,
    });
})

const GetSingleComments = catchAsync(async (req, res) => {
    const result = await CommentsService.GetSingleComments(req.params?.id)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Comments retrieve successful',
        data: result,
    });
})

const UpdateComments = catchAsync(async (req, res) => {
    const result = await CommentsService.UpdateComments(req.params?.id, req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Comments update successful',
        data: result,
    });
})

const DeleteComments = catchAsync(async (req, res) => {
    const result = await CommentsService.DeleteComments(req.params?.id)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Comments Delete successful',
        data: result,
    });
})


const CommentsController = {
    CreateNewComments,
    GetAllComments,
    GetSingleComments,
    UpdateComments,
    DeleteComments
}

export default CommentsController