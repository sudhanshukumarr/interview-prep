const { getUserById, createUser, updateUser, deleteUser } = require("../services/userService");

async function getUser(req, res) {
    let userId = req.params.id;
    let data = await getUserById(userId);
    if (!data) {
        res.status(404).json({
            message: ' no user found',
        })
        return;
    }
    res.json({
        data: data
    })
}

async function createUserController(req, res, next) {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let dob = req.body.dob;
    let data = await createUser(name, email, phone, dob)
    if (data) {
        return res.json({
            message: 'Data added successfully',
            data
        })
    }
    return res.json({
        message: 'Error in adding data',
    })
}

async function putUserController(req, res, next) {
    try {
        let id = req.params.id;
        // let email = req.body.email;
        //let phone = req.body.phone;
        //let dob = req.body.dob;
        const { name, phone, email, dob } = req.body;
        let data = await updateUser(id, name, email, phone, dob)
        if (data) {
            return res.json({
                data: data,
                message: 'data updated successfully'
            })
        }
        return res.json({
            message: 'not updated'
        })
    } catch (err) {
        console.log('err ' + err);
        res.json({
            message: 'error in updating data'
        })
    }
}

async function deleteUserController(req, res, next) {
    try {
        let id = req.params.id;
        let data = await deleteUser(id)
        if (data) {
            return res.json({
                data: data,
                message: 'data deleted successfully'
            })
        }
        return res.json({
            message: 'not deleted'
        })
    } catch (err) {
        console.log('err ' + err);
        res.json({
            message: 'error in  deleting data'
        })
    }
}

module.exports = {
    getUser,
    createUserController,
    putUserController,
    deleteUserController
}