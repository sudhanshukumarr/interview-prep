const { getUserById } = require("../services/userService");

async function getUser(req,res){
    let userId = req.params.id;
    let data = await getUserById(userId);
    if(!data){
        res.status(404).json({
            message: ' no user found',
        })
        return;
    }
    res.json({
        data : data
    })

}
 

exports.getUser = getUser ;