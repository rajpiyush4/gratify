import { getDailyChallenge, populateChallenges } from "@/actions/challengeActions"
import { getUserByEmail } from "@/actions/userActions"
import { getChallengedGratitudes } from "@/actions/gratitudeActions"
import Post from "@/components/PostLayout/Post"
import Link from "next/link"


async function page() {
  const challenge = await getDailyChallenge()
  if (!challenge) return <></>;
  const entries = await getChallengedGratitudes(challenge?._id)
  const user = await getUserByEmail()
  // const 
  if (!challenge) return <div className="bg-white w-1/2 m-auto p-4 text-center rounded-md text-4xl text-pink-d">
    Daily Dare !!</div>

  return (
    <>
      <section>
        <div className="border-2 bg-white w-1/2 m-auto p-4 flex flex-col rounded-md items-center gap-4">
          <div className="font-bold font-lilita text-center text-4xl text-pink-d">Daily Dare !!</div>
          <p className="text-center font-semibold">{challenge?.description}</p>
          <Link href={`/challenges/daily-challenge/${challenge?._id?.toString()}`} className="px-8 py-2 w-fit rounded-[50px]  bg-yellow-d font-mono border border-black shadow-custom">Take the challenge</Link>
          {/* if challenge taken disable the button */}
        </div>

        <article className='w-[80%] m-auto mt-8'>
          {entries?.map((entry, key) => {
            return <Post key={key} entry={entry} />
          })}
        </article>



       <div className="fixed bottom-10 left-8 rounded-full bg-yellow-d p-4 font-bold text-lg">{user.streakCount}</div>
      </section>
    </>
  )
}

export default page