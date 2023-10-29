import Link from "next/link"
import { getPublicEntries } from "@/actions/gratitudeActions"

async function home() {
  const entries = await getPublicEntries()

  //find all public feeds -- gratitude enteries that are public
  return (
    <section>
      <div className="mb-8"><Link href={'/compose/post'}>Add what you're grateful for</Link> </div>

      {entries?.map((entry, key) => {
        if (entry.isPublic) {
          return <div className="max-w-md m-auto border p-4" key={key}>
            {entry.content}
          </div>
        }
      })}




    </section>
  )
}

export default home