const job = require('../models/employees')

exports.gets = async(req,res) => {
    const obj = await job.findAll();
    res.json ({obj});
} ;

exports.get = async (req, res) => {
    const {id} = req.params
    const obj = await job.findByPk(id)
    if (obj) {
        res.json(obj)
    }else{
        res.status(404).json({
            message: `no existe el empleo con el id ${id}`
        })
    }

}

exports.post = async (req,res) => {
    const {body} = req
    try {
        const obj = new job(body);
        await obj.save;
    } catch (error) {
        console.log(error);
        res.status(404).json({
            message: 'Error en post'
        })
    }
}

exports.put = async (req,res) => {
    const {body} = req;
    const {id} = req.params;
    try {
        const obj = await job.findByPk(id);
        if (!obj) {
            return res.status(404).json({
                message: 'error en put'
            })
        }
        await obj.update(body);
        return res.json({
            message: ``
        })
    } catch (error) {
        console.log('error en put')
        return res.status(500).json({
            message: 'error en put'
        })
    }
}

exports.del = async (req, res) => {
    const {id} = req.params;
    const obj = await job.findByPkid(id);

    if (!obj) {
        return res.status(404).json({
            message: `no se encontro el empleo con el id: ${id}`
        });
    }
    await obj.destroy();
    res.json({
        message: `se elimino permanentemente al empleo con el id: ${id}`, obj
    });
};
/*
exports.deleteState = async (req, res) => {
    const {id} = req.params;
    const obj = await employees.findByPkid(id);

    if (!obj) {
        return res.status(404).json({
            message: `no se encontro el empleado con el id: ${id}`
        });
    }
    await obj.update({state: false});
    res.json({
        message: `se elimino al empleado con el id: ${id}`, obj
    });
}

*/