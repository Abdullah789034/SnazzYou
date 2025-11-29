const HttpError = require("../utils/customError");

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      success: false,
      error: {
        statusCode: err.statusCode,
        message: err.message,
      },
    });
  }

  // eslint-disable-next-line no-console
  console.log(`ERROR::: ${err.message}`, err.stack);

  return res.status(500).json({
    success: false,
    error: {
      statusCode: 500,
      message: "server ran into a problem, try again later",
    },
  });
};

module.exports = errorHandler;
