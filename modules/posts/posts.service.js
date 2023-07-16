class PostService{
    static async getPosts(){
        try{
            return {
                "title":"1",
                "body":"Hello World",
                "author":"Aditya"
            }
        }
        catch(err){
            throw err;
        }
    }
}

module.exports = PostService