'use client'
import {Heart} from 'lucide-react'
import { useState } from 'react'
import { updateLikes } from '@/actions/gratitudeActions';

function Likes({id}:{id:string}) {
  const [filled, setFilled] = useState(false);
  console.log(id)

  
  const handleLikes = async() =>{
    // const updatedEntry = await updateLikes(id)

  }


  return (
   
    <button onClick={handleLikes}
     className="py-2 bg-white px-4 border border-blue-l shadow-custom w-fit rounded-full"> <Heart color="black" fill={filled? 'red' : 'none'} />
    </button>
  )
}

export default Likes