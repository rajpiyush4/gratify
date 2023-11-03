import { addComment } from "@/actions/commentActions"

function AddComment({ entryId, parentId, userId }: { entryId: string, parentId?:string | null,userId: string }) {
    const handleComment = async (formdata: FormData) => {
        'use server'
        const content = formdata.get('comment')
        try{
            if (content == '') throw Error("it's empty")
            const comment = {
              content: content,
              entryId: entryId,
              parentId: parentId,
              userId: userId
            }
            const added = await addComment({comment})

        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <form action={handleComment}>
                <input className="w-full border bg-transparent rounded-md px-4 py-2" type="text" name="comment" placeholder="reply?" required />
            </form>
        </div>
    )
}

export default AddComment