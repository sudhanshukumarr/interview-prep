const { listGyms,getGymById } = require("../services/gymService");
async function getGyms(req, res, next) {
    const gyms = await listGyms();
    res.json({
        data: gyms
    })
}

async function getGym(req, res, next) {
    let id = req.params.id;
    let data =  await getGymById(id);
    if(!data){
        res.status(404).json({
            message: 'no data found',

        })
        return ;

    }
    res.json({
        data : data
    })
    
}


exports.getGyms = getGyms;
exports.getGym = getGym;
