export const dev = {
 
        app:{
            port:process.env.PORT || 8000
        },
        db:{
            url:process.env.MONGO_URL || ''

        }
    
}