const Joi = require('joi');

exports.usersRequestSchema = Joi.object({
    name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    email: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    password: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
})

exports.usersResponseSchema = Joi.object({
    name: Joi.string()
    .alphanum()
    .default(""),
    email: Joi.string()
    .required(),
})

exports.usersListResponseSchema = Joi.array().items(this.usersResponseSchema);