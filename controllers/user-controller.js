const postUser = require('../model/user-schema')

//get user details
const getUsers = async (request, response) =>{
    try {
        let users = await postUser.find()
        response.json(users) 

    } catch (error) {
        response.json({message : error.message})
    }
}
 module.exports = getUsers
// const deleteUser = async (request, response) =>{
//     try {
//         await postUser.deleteOne({_id: request.params.id})
//         response.json("Deleted succesfully")
//     } catch (error) {
//         response.error({message: error.message})
//     }
// }

// module.exports = deleteUser