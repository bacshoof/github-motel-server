import { ActionModel } from "../models/ActionModel.js";

class Action {
    index(req, res) {
        ActionModel.find().limit(4).sort({"createdAt": -1})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            res.status(400).json(error)
        })
    };

    createAction(req, res) {
        const newAction = req.body;
        const action = ActionModel(newAction)
        action.save()
        .then(() => {
            res.status(200).json('Success')
        })
        .catch(error => {
            res.status(400).json(error)
        })
    }
}

export default new Action