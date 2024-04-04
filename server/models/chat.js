import mongoose, { Schema, model, Types } from "mongoose";

const chatSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    groupChat: {
        type: Boolean,
        default: false,
    },
    creator: {
        type: Types.objectId,
        ref: "User",
    },
    members: [{
        type: Types.objectId,
        ref: "User",
    }],
}, { timestamps: true });

export const Chat = mongoose.models.Chat || model("User", chatSchema);