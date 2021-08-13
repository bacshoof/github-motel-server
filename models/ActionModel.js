import mongoose from "mongoose";

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        require: true,
    },
    item: {
        type: String,
        default: undefined,
    },
    price: {
        type: Number,
        default: 0,
    },
},
    {
        collection: 'actions',
        timestamps: true,
    },
);

export const ActionModel = mongoose.model('Action', schema);