export const sampleChats = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
        groupchat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Boi",
        _id: "2",
        groupchat: true,
        members: ["1", "2"],
    },

];

export const sampleUsers = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Boi",
        _id: "2",
    },
];
export const sampleNotifications = [
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Doe",
        },
        _id: "1",
    },
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Boi",
        },
        _id: "2",
    },
];
export const sampleMessage = [
    {
        attachments: [
            {
                pulic_id: "asdsad",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "Hello Asif bro",
        _id: "lkdsfjkafasodafjk",
        sender: {
            _id: "user._id",
            name: "chaman",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:41:30.630Z"
    },
    {
        attachments: [
            {
                pulic_id: "asdsad 2",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "Hello Asif bro",
        _id: "lkdsfjkafasodafjk",
        sender: {
            _id: "lkdsfjkafa434mbnsodafjk",
            name: "chaman 2",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:41:30.630Z"
    },
];
export const dashboardData = {
    users: [
        {
            name: "John Boi",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "1",
            username: "john_doe",
            friends: 20,
            groups: 5,
        },
        {
            name: "John Boi",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "2",
            username: "john_doe",
            friends: 10,
            groups: 15,
        },

    ],
    chats: [
        {
            name: "Badass Group",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "1",
            groupchat: false,
            members: [{ _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" }, { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" }],
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: "John D3oi",
                avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            },
        },
        {
            name: "John Boi",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "2",
            groupchat: true,
            members: [{ _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" }, { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" }],
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: "John Boi",
                avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            },
        }
    ],
    message: [
        {
            attachments: [],
            content: "Hello Asif",
            _id: "abcdefghijklmnop",
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "chaman",
            },
            chat: "chatId",
            groupchat: false,
            createdAt: "2024-02-12T10:41:30.630Z",
        },
        {
            attachments: [
                {
                    pulic_id: "asdsad 2",
                    url: "https://www.w3schools.com/howto/img_avatar.png",
                },
            ],
            content: "Hello Asif",
            _id: "hijklmnopqrstuvwxyz",
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Bhaman",
            },
            chat: "chatId",
            groupchat: true,
            createdAt: "2024-02-12T10:41:30.630Z",
        },
    ]
}