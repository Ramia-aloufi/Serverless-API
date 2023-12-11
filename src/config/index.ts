export const dev = {
 
        app:{
            port:process.env.PORT || 8000
        },
        db:{
            url:process.env.MONGO_URL || 'mongodb+srv://ramia:12312344@cluster0.tcv9vml.mongodb.net/test'

        }
    
}