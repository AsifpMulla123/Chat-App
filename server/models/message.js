import mongoose, { Schema, model, Types } from "mongoose"

const messageSchema = new Schema({
    content: String,
    attachments: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
    ],
    sender: {
        type: Types.objectId,
        ref: "User",
        required: true,
    },
    chat: {
        type: Types.objectId,
        ref: "Chat",
        required: true,
    },
}, { timestamps: true });

export const Message = mongoose.models.Message || model("Message", messageSchema);