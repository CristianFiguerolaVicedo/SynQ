import { Inngest } from "inngest";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "synq-app" });

async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const email = email_addresses?.[0]?.email_address;

    if (!email) {
        throw new Error("No email found for Clerk user");
    }

    let username = email.split("@")[0];

    const user = await User.findOne({ username });

    if (user) {
        username = username + Math.floor(Math.random() * 10000);
    }

    const userData = {
        _id: id,
        email,
        full_name: `${first_name} ${last_name}`,
        profile_picture: image_url,
        username,
    };

    await User.create(userData);
}

async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const email = email_addresses?.[0]?.email_address;

    const updatedUserData = {
        email,
        full_name: `${first_name} ${last_name}`,
        profile_picture: image_url,
    };

    await User.findByIdAndUpdate(id, updatedUserData);
}

const syncUserDelete = inngest.createFunction(
    {id: 'delete-user-with-clerk'},
    {event: 'clerk/user.deleted'},
    async ({event}) => {
        const {id} = event.data

        await User.findByIdAndDelete(id)
    }
)

export const functions = [syncUserCreation, syncUserUpdate, syncUserDelete];