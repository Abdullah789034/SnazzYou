const joi = require("joi");
const HttpError = require("../utils/customError");

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error: bodyError } = schema?.body
      ? schema.body.validate(req.body)
      : { error: null };
    const { error: paramsError } = schema?.params
      ? schema.params.validate(req.params)
      : { error: null };
    const { error: queryError } = schema?.query
      ? schema.query.validate(req.query)
      : { error: null };

    const firstError =
      bodyError?.details[0] ||
      paramsError?.details[0] ||
      queryError?.details[0];

    if (firstError) {
      throw new HttpError(400, firstError.message);
    }

    next();
  };
};

module.exports = { validateRequest };
