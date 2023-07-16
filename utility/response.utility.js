module.exports = async function sendResponse(message, status, result, responseSchema) {
  try{
    if(!responseSchema){
      throw "Response Schema is missing"
    }
    let returnObj = {
      message: message,
      status_code: status,
    };

    let validate = responseSchema.validate(result);
  
    if(validate.error){
      throw validate.error
    }

    if (Array.isArray(result)) {
      returnObj.items = result;
    }
    else {
      returnObj = {...returnObj,...result}
    }
    return returnObj;
  }
  catch(err){
    throw err;
  }
}