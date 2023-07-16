const express = require('express');
const router = express.Router();
const PostService = require("./posts.service");
const UserService = require("../users/users.service");
const sendResponse = require("../../utility/response.utility");
const HttpStatusCode = require("../../enums/httpStatusCodes");
const {postRequestSchema , postResponseSchema} = require("./posts.schema")

router.use((req,res,next)=>{
    console.log("Posts route Level Middleware");
})

router.get('/', async(req, res, next)=> {
    try{
        return res.json(
            sendResponse("Posts fetched", HttpStatusCode.OK, await(PostService.getPosts()), postResponseSchema)
        )
    }
    catch(err){
        throw err;
    }
});

module.exports = {
    baseUrl:"/posts",
    controller:router
};