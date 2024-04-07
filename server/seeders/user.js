import { User } from "../models/user.js";
import { faker } from "@faker-js/faker"

const createUser = async (numUsers) => {

    try {
        const usersPromise = [];
        for (let index = 0; index < numUsers; index++) {
            const temp = User.create({
                name: faker.person.firstName(),
                username: faker.internet.userName(),
                bio: faker.lorem.lines(10),
                password: "password",
                avatar: {
                    url: faker.image.avatar(),
                    public_id: faker.system.fileName(),
                },
            })
            usersPromise.push(temp);
        }
        await Promise.all(usersPromise);
        console.log("Users Created", numUsers);
        process.exit(1);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

export { createUser };