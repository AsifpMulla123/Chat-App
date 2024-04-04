import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";
import { compare } from "bcrypt";

const newUser = async (req, res) => {
    const { name, username, password, bio } = req.body;
    const avatar = {
        public_id: "asif",
        url: "adfoaeeiofadsf",
    };
    const user = await User.create({ name, username, password, bio, avatar })

    sendToken(res, user, 201, "User Created");
};

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username }).select("+password");
        if (!user) {
            return next(new Error("Invalid Username"));
        }
        const isMatch = await compare(password, user.password);

        if (!isMatch) {
            return next(new Error("Invalid Password"));
        }
        sendToken(res, user, 201, `Welcome Back,${user.name}`);
    } catch (error) {
        next(error);
    }
};
const getMyProfile = async (req, res) => {
    // return await User.findById("")
};
export { login, newUser, getMyProfile };