const { listGyms, getGymById, createGym, updateGym, deleteGym } = require("../services/gymService");

async function getGyms(req, res, next) {
    const gyms = await listGyms();
    res.json({
        data: gyms
    })
}

async function getGym(req, res, next) {
    let id = req.params.id;
    let data = await getGymById(id);
    if (!data) {
        return res.status(404).json({
            message: 'no data found',
        })
    }
    res.json({
        data
    })
}

async function createGymController(req, res) {
    let name = req.body.name;
    let address = req.body.address;
    let data = await createGym(name, address)
    res.json({
        data,
    })
}

async function putGymController(req, res) {
    try {
        let id = req.params.id;
        let name = req.body.name;
        let address = req.body.address;
        if (!name || !address) {
            return res.json({
                message: 'please provide a name or an address'
            })
        }
        let result = await updateGym(id, name, address);

        if (result) {
            return res.json({
                message: 'data update successfully',
                data: result
            })
        }
        return res.json({
            message: 'not updated'
        })

    } catch (err) {
        res.json({
            message: 'error in updating data'
        })
    }
}

async function deleteGymController(req, res, next) {
    let id = req.params.id;
    let result = await deleteGym(id)
    if (result) {
        return res.json({
            message: 'data deleted successfully'
        })
    }
    return res.json({
        message: 'not deleted'
    })
}

exports.createGymController = createGymController;
exports.putGymController = putGymController;
exports.getGyms = getGyms;
exports.getGym = getGym;
exports.deleteGymController = deleteGymController;
