const postUser = require('../model/user-schema')

const getUserById = (request, response) =>{
    const id = request.params.id
    try {
        const user = postUser.findById(id)
        response.json(user)
    } catch (error) {
        response.error({  message: error.message})
    }
}

module.exports = getUserById