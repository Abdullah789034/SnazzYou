const joi = require("joi");

const validationSchemas = {
  auth: {
    register: {
      body: joi.object({
        name: joi.string().required().trim(),
        email: joi.string().email().required(),
        dateOfBirth: joi.string().isoDate().required(),
        gender: joi.string().required(),
        password: joi.string().required(),
        region: joi
          .object({
            country: joi.string().required(),
            city: joi.string().required(),
          })
          .required(),
      }),
    },
    emailCheck: {
      body: joi.object({
        email: joi.string().email().required(),
      }),
    },
    login: {
      body: joi.object({
        email: joi.string().email().required(),
        password: joi.string().required(),
      }),
    },
  },
  user: {
    feedback: {
      body: joi.object({
        rating: joi.number().min(1).max(5).required(),
        comment: joi.string().required(),
        // suggestionId: joi.string()
      }),
    },
  },
};

module.exports = validationSchemas;
