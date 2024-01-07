const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const airplaneRepository = new AirplaneRepository();
const AppError = require("../utils/errors/app-errors");

const createAirplane = async (data) => {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {

    if (error.name === "SequelizeValidationError") {
      let Explanation = [];
      error.errors.forEach((err) => {
        Explanation.push(err.message);
      });

      throw new AppError(
       Explanation,
        StatusCodes.BAD_REQUEST
      );
    }
    throw new AppError(
      "Cannot create a new Airplane Object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

const getAirplane = async () => {
  try {
    const airplane = await airplaneRepository.getAll();
    console.log(airplane);
    return airplane;
  } catch (error) {
    throw error;
  }
};

const getIdAirplane = async (data) => {
  try {
    const airplane = await airplaneRepository.get(data);
    console.log(airplane);
    return airplane;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createAirplane,
  getAirplane,
  getIdAirplane,
};
