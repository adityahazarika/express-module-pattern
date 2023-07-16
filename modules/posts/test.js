const schema = require("./posts.schema");
const Joi = require("joi");
const services = Joi.array().items(schema.resSchema)

console.log(services.validate([{"title":"Hello",
"author":"Hello",
"password":"asdad"
},
{
"title":"Hello",
"body":"Author",
"author":"Hello"
}
]))