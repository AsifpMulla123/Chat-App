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
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
}, { timestamps: true });

export const Chat = mongoose.models.Chat || model("Chat", chatSchema);