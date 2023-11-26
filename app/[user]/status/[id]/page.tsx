import { getFirstLevelCommentByEntryId } from '@/actions/commentActions'
import { getPublicGratitudeById } from '@/actions/gratitudeActions'
import Link from 'next/link'
import AddComment from '@/components/PostLayout/AddComment'

async function page({ params }: { params: { user: string, id: string } }) {

    let entry = await getPublicGratitudeById(params.id)
    if (entry == null) return <>Not exist</>;
    let comments = await getFirstLevelCommentByEntryId(params.id)


    return (
        <div className="w-full h-screen bg-red relative">
            <div className="text-center w-full ">
                <span className="px-4 py-2 w-full block font-fantasy text-3xl font-semibold">Comments</span>
            </div>

            <div className='flex flex-col bg-white gap-4 p-4 overflow-y-scroll h-screen'>
                <AddComment entryId={params.id} username={params.user} parentId={null} />
                {comments?.map((comment: any, key: number) => <div className='bg-white flex flex-col border-2 gap-2 p-4 rounded-md' key={key}>
                    <div>{entry?.content}</div>
                    <Link href={`/${comment.username}`} className='w-fit font-semibold text-sm'>{comment.username}</Link>
                    <p>{comment.content}</p>
                    <Link className='p-2 bg-blue-l text-white rounded-sm w-fit text-xs' href={`/${params.user}/comment/${comment._id.toString()}`}>see replies</Link>
                    <AddComment entryId={params.id} username={params.user} parentId={comment._id.toString()} />

                </div>

                )}
            </div>
        </div>
    )
}

export default page