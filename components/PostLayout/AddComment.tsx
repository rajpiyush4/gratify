import { addComment } from "@/actions/commentActions"
import { ObjectId } from "mongodb"
import { revalidatePath } from "next/cache"
import { getUserByUsername } from "@/actions/userActions"


function AddComment({ entryId, parentId, username }: { entryId: string, parentId?: string | null, username: string }) {
    const handleComment = async (formdata: FormData) => {
        'use server'
        const content = formdata.get('comment')
        try {
            if (content == '') throw Error("it's empty")
            const user = await getUserByUsername(username)
            const comment = {
                content: content,
                entryId: entryId,
                parentId: parentId,
                username: username,
                userImg: user.profileImg
            }
            const added = await addComment({ comment })
            revalidatePath(`/${username}/status/${entryId}`)
            

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <form action={handleComment}>
                <input className="w-full border bg-transparent rounded-md px-4 py-2" type="text" name="comment" placeholder="reply?" required />
                <button className="float-right text-white p-2 rounded-sm text-sm bg-blue-l mt-1">Post</button>
            </form>
        </div>
    )
}

export default AddComment