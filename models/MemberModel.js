import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    scores: {
        type: Number,
        required: true,
    },
    imgUrl: {
        type: String,
    },
    pass: {
        type: String,
    },
    username: {
        type: String,
        require: true,
    },
    contribute: {
        type: Number,
        require: true,
    }
},
    {
        collection: 'members'
    }
);

export const MemberModel = mongoose.model('Member', schema);
