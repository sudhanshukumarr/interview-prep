const { listGyms, getGymById, createGym, updateGym, deleteGym } = require("../services/gymService");

async function getGyms(req, res, next) {
    try {
        const gyms = await listGyms();
        res.json({
            data: gyms
        })
    } catch (err) {
        console.log('error occurred ', err);
        res.status(500).json({
            message: 'something went wrong'
        })
    }
}

async function getGym(req, res, next) {
    try {
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
    } catch (err) {
        console.log('error occurred ', err);
        res.status(500).json({
            message: 'something went wrong'
        })
    }
}

async function createGymController(req, res) {
    try {
        let name = req.body.name;
        let address = req.body.address;
        let data = await createGym(name, address)
        res.json({
            data,
        })
    } catch (err) {
        console.log('error occurred ', err);
        res.status(500).json({
            message: 'something went wrong'
        })
    }
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
        res.status(500).json({
            message: 'error in updating data'
        })
    }
}

async function deleteGymController(req, res, next) {
    try {
        let id = req.params.id;
        let result = await deleteGym(id)
        if (result) {
            return res.json({
                message: 'data deleted successfully'
            })
        }
        return res.status(500).json({
            message: 'not deleted'
        })
    } catch (err) {
        console.log('error occurred ', err);
        res.status(500).json({
            message: 'something went wrong'
        })
    }
}

exports.createGymController = createGymController;
exports.putGymController = putGymController;
exports.getGyms = getGyms;
exports.getGym = getGym;
exports.deleteGymController = deleteGymController;
