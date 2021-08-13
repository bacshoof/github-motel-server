import mongoose from "mongoose";

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    item: {
        type: String,
        default: undefined,
    },
    price: {
        type: Number,
        default: 0,
    },
    member: {
        type: Array,
        require: true,
    }
},
    {
        collection: 'cookings',
        timestamps: true,
    },
);

export const CookingModel = mongoose.model('Cooking', schema);