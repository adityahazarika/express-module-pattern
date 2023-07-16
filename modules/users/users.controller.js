var express = require('express');
var router = express.Router();
const UserService = require("./users.service")
const { usersRequestSchema, usersListResponseSchema,usersResponseSchema} = require("./users.schema")
const sendResponse = require("../../utility/response.utility");
const HttpStatusCode = require("../../enums/httpStatusCodes");


router.get('/', async function (req, res, next) {
  try {
    return res.json(
      await sendResponse("Users fetched", HttpStatusCode.OK, await(UserService.getUsers()), usersResponseSchema)
    )
  }
  catch (err) {
    throw err;
  }
});

router.get('/all', async function (req, res, next) {
  try {
    return res.json(
      await sendResponse("Users fetched", HttpStatusCode.OK, await(UserService.getUsersList()), usersListResponseSchema)
    )
  }
  catch (err) {
    throw err;
  }
});

module.exports = {
  baseUrl: "/users",
  controller: router
};