const Joi = require('joi');

exports.postRequestSchema = Joi.object({
    title: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    body: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    author: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
})

exports.postResponseSchema = Joi.object({
    title: Joi.string()
    .alphanum()
    .min(3)
    .max(30),
    body: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .default(""),
    author: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
})

exports.postListResponseSchema = Joi.array().items(this.postResponseSchema)