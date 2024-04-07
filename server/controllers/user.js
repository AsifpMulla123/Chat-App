import { User } from "../models/user.js";
import { sendToken, cookieOptions } from "../utils/features.js";
import { compare } from "bcrypt";
import { ErrorHandler } from "../utils/utility.js";
import { TryCatch } from "../middlewares/error.js";

const newUser = async (req, res) => {
    const { name, username, password, bio } = req.body;
    const avatar = {
        public_id: "asif",
        url: "adfoaeeiofadsf",
    };
    const user = await User.create({ name, username, password, bio, avatar })

    sendToken(res, user, 201, "User Created");
};

const login = TryCatch(async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid Username or Password", 404));
    }
    const isMatch = await compare(password, user.password);

    if (!isMatch) {
        return next(new ErrorHandler("Invalid Username or Password", 404));
    }
    sendToken(res, user, 201, `Welcome Back,${user.name}`);
});
const getMyProfile = TryCatch(async (req, res) => {
    const user = await User.findById(req.user);
    res.status(200).json({
        success: true,
        user,
    })
}
);
const logout = TryCatch(async (req, res) => {
    const user = await User.findById(req.user);
    return res.status(200).cookie("chattu-token", "", { ...cookieOptions, maxAge: 0 }).json({
        success: true,
        message: "Logged out successfully",
    });
}
);
const searchUser = TryCatch(async (req, res) => {
    const { name } = req.query;
    // const user = await User.findById(req.user);
    return res.status(200).cookie("chattu-token", "", { ...cookieOptions, maxAge: 0 }).json({
        success: true,
        message: name,
    });
}
);

export { login, newUser, getMyProfile, logout, searchUser };