const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse , ErrorResponse } = require('../utils/common')

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.message = "Airplane create Successfully"
    SuccessResponse.data = airplane
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error
    return res.status(error.statusCode).json(ErrorResponse);
  }
}


async function getAirplane(req, res) {
    try { 
      const airplane = await AirplaneService.getAirplane();
      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Successfully get airplane",
        data: airplane,
        error: {},
      });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Something Went wrong",
        data: {},
        error: error,
      });
    }
  }


  async function getById(req, res) {
    try {
      console.log(req.params.id);
      const airplane = await AirplaneService.getIdAirplane({
        id : req.params.id
      })
      // console.log(req)
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        success : false,
        message : 'Something Went Wrong',
        data:{},
        error : {}
      })
    }
  }


module.exports = {
  createAirplane,
  getAirplane,
  getById
};
