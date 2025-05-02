import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import VoteService from "./vote.service";

const AddedNewVote = catchAsync(async (req, res) => {
    const result = await VoteService.AddedNewVote(req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: 'Vote added successful',
        data: result,
    });
})

const getAllVote = catchAsync(async (req, res) => {
    const result = await VoteService.GetAllVote()
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'vote retrieve successful',
        data: result,
    });
})

const GetSingleVote = catchAsync(async (req, res) => {
    const result = await VoteService.GetSingleVote(req.params?.id)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'vote retrieve successful',
        data: result,
    });
})

const UpdateSingleVote = catchAsync(async (req, res) => {
    const result = await VoteService.UpdateSingleVote(req.params?.id, req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'vote update successful',
        data: result,
    });
})

const DeleteSingleVote = catchAsync(async (req, res) => {
    const result = await VoteService.DeleteSingleVote(req.params?.id)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'vote delete successful',
        data: result,
    });
})


const VoteController = {
    AddedNewVote,
    GetSingleVote,
    getAllVote,
    UpdateSingleVote,
    DeleteSingleVote
}

export default VoteController