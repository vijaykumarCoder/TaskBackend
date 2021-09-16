const postUser = require('../model/user-schema')

const updateUser = async (request, response) =>{
    const user = request.body
    const editUser = new postUser(user)
    try {
        await postUser.updateOne({_id: request.params.id},editUser)
        response.json(editUser)
    } catch (error) {
        response.json({message: error.message})
    }    
}

module.exports = updateUser