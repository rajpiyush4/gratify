import { ObjectId } from "mongodb"

export type Entry={
    _id: ObjectId
    content: string,
    isPublic: boolean,
    createdAt: Date,
    username: string,
    userImg: string,
    challengeId: ObjectId
}

export type User = {
    _id: ObjectId,
    name?: string | null | undefined,
    username?: string | null | undefined,
    image?: string | null | undefined,
    email?: string | null | undefined,
    profileImg: string |null | undefined,
    bio: string |null | undefined,
  }