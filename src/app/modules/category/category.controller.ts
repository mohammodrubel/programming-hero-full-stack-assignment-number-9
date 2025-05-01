import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import CategoryService from "./category.service";

const CreateCategory = catchAsync(async(req,res)=>{
    const result = await CategoryService.CreateCategory(req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: 'Category create successful',
        data: result,
      });
})

const GetAllCategory = catchAsync(async(req,res)=>{
    const result = await CategoryService.GetAllCategory()
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Categoryes retrieve successful',
        data: result,
      });
})

const GetSingleCategory = catchAsync(async(req,res)=>{
    const result = await CategoryService.GetSingleCategory(req.params?.id)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Category retrieve successful',
        data: result,
      });

})

const UpdateCategory = catchAsync(async(req,res)=>{
    const result = await CategoryService.UpdateCategory(req.params?.id,req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Category update successful',
        data: result,
      });
})

const DeleteCategory = catchAsync(async(req,res)=>{
    const result = await CategoryService.DeleteCategory(req.params?.id)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Category delete successful',
        data: result,
      });
})


const CategoryController = {
    CreateCategory,
    GetAllCategory,
    GetSingleCategory,
    UpdateCategory,
    DeleteCategory
}

export default CategoryController