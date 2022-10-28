const { listGyms,getGymById, createGym } = require("../services/gymService");
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

async function createGymController(req,res){
    let name = req.body.name;
    let address = req.body.address;
   let data =  await createGym(name,address)
   res.json({
     data,
   })
    
}

exports.createGymController = createGymController;

exports.getGyms = getGyms;
exports.getGym = getGym;
