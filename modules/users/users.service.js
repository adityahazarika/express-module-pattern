class UserService{
    static async getUsers(){
        try{
            return {
                "name":"1",
                "email":"aditya@gmail.com",
            }
        }
        catch(err){
            throw err;
        }
    }
    static async getUsersList(){
        try{
            return [
                {
                    "name":"1",
                    "email":"aditya@gmail.com",
                },
                {
                    "name":"2",
                    "email":"aditya2@gmail.com",
                }
            ]
        }
        catch(err){
            throw err;
        }
    }
    static async getUserPosts(){
        try{
            return "Hello User Posts"
        }
        catch(err){
            throw err;
        }
    }
}

module.exports = UserService