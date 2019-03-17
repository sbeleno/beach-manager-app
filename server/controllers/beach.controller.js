const Beach = require('../models/beach');
const beachCtrl = {};

beachCtrl.getBeaches = async (req, res) => {
    const beaches = await Beach.find();
    res.status(200).json(beaches);
};

beachCtrl.createBeach = async (req, res) => {
    const beach = new Beach(req.body);
    await beach.save();
    res.status(201).json({'status': 'Beach saved'});
};

beachCtrl.getBeach = async (req, res) => {
    const beach = await Beach.findById(req.params.id);
    res.status(200).json(beach);
};

beachCtrl.updateBeach = async (req, res) => {
    const { id } = req.params;
    const beach = {
        name: req.body.name,
        percentage: req.body.percentage,
    };
    await Beach.findByIdAndUpdate(id, {$set: beach}, {new: true});
    res.status(200).json({status: 'Beach updated'});
}

beachCtrl.deleteBeach = async (req, res) => {
    const { id } = req.params;
    await Beach.findByIdAndDelete(id);   
    res.status(200).json({status: 'Beach deleted'}); 
}

module.exports = beachCtrl;