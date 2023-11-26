'use client'
import {Heart} from 'lucide-react'
import { useState } from 'react'
// import { updateLikes } from '@/actions/gratitudeActions';

function Likes({id}:{id:string}) {
  const [filled, setFilled] = useState(false);

  const handleLikes = async() =>{
    setFilled(fill=>!fill)
    // const updatedEntry = await updateLikes(id)

  }


  return (
   
    <button onClick={handleLikes}
     className="py-2 bg-white px-4 shadow-custom w-fit rounded-md"> <Heart color="#4562E9" fill={filled? 'red' : 'none'} />
    </button>
  )
}

export default Likes