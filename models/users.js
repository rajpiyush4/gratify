import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String, 
    },
    username: {
        type: String, 
        unique: [true, "username already exists"]
    },
    email: {
        type: String,
        unique: [true, "Email already exists"]
    },
    profileImg: {
        type: String
    },
    bio: {
        type: String
    }
})

const User = models.users || model("users", UserSchema)
export default User