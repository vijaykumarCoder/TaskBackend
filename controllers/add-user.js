const postUser = require('../model/user-schema')

const addUser = async (request,response) =>{
    const user = request.body
    //  console.log("hi")
    // console.log(user)
        // response.send(" User added 133 ")
    const newUser = new postUser(user)
    try {
        await newUser.save()
        console.log("hi")
        response.redirect("http://localhost:3000/")
    } catch (error) {
        response.json({message: error.message})
    }    
}
module.exports = addUser;