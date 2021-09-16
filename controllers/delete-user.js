const postUser = require('../model/user-schema')

const deleteUser = async (request, response) =>{
    try {
        await postUser.deleteOne({_id: request.params.id})
        response.json("Deleted succesfully")
    } catch (error) {
        response.error({message: error.message})
    }
}

module.exports = deleteUser