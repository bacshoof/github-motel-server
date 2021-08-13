import { CookingModel } from "../models/CookingModel.js";

class Cooking {
    index(req, res) {
        CookingModel.find()
        .limit(1)
        .skip(parseInt(req.body.skip))
        .sort({'createdAt': -1})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }

    createCooking(req, res) {
        const data = req.body;
        const newCooking = CookingModel(data);
        newCooking.save()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((error) => {
            res.status(500).json(error)
        })
    }

    updateCooking(req, res) {
        const _id = req.params.id;
        const newData = req.body;
        CookingModel.findByIdAndUpdate(
            _id,
            newData,
            {new: true}
        )
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }
}

export default new Cooking