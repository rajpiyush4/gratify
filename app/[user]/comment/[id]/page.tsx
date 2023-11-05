import { getCommentByParentId } from '@/actions/commentActions'
import { getUserByUsername } from '@/actions/userActions'
import { getPublicGratitudeById } from '@/actions/gratitudeActions'
import Link from 'next/link'
import AddComment from '@/components/PostLayout/AddComment'

async function page({ params }: { params: { user: string, id: string } }) {
    let comments
    try {
        // entry = await getPublicGratitudeById(params.id)
        comments = await getCommentByParentId(params.id)

    } catch (err) {
        console.log(err)
        return <></>
    }


    return (
        <div className="w-full h-screen bg-red relative">
            <div className="text-center w-full ">
                <span className="px-4 py-2 w-full block font-fantasy text-3xl font-semibold">Comments</span>
            </div>

            {comments == null ? <div className=' mb-4 bg-white-d'>
                <p>No comments yet </p>

                <AddComment entryId={params.id} username={params.user} parentId={null} />

            </div> : <div>
                {/* //add overflow */}
                {comments?.map((comment: any, key: number) => <div className='bg-white flex flex-col gap-2 rounded-md p-4' key={key}>
                    <Link href={`/${comment.username}`} className='w-fit font-semibold text-sm'>{comment.username}</Link>
                    <p>{comment.content}</p>
                    <Link className='p-2 bg-blue-l text-white rounded-sm w-fit text-xs' href={`/${params.user}/comment/${comment._id.toString()}`}>see replies</Link>
                    <AddComment entryId={params.id} username={params.user} parentId={comment._id.toString()} />

                </div>

                )}
            </div>}
        </div>
    )
}

export default page