'use client'

import { useState } from 'react'
import { MoreVerticalIcon } from 'lucide-react'

function Block() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='relative'>
            <MoreVerticalIcon className='cursor-pointer' onClick={() => setToggle(toggle => !toggle)} size={15} />
            {toggle && <div className='absolute translate-x-[-50%] top-[100%] left-[50%] flex flex-col gap-4 border bg-white p-4 rounded-md'>
                <span className='cursor-pointer'>block</span>
                <span className='cursor-pointer'>report</span>
            </div>}
        </div>
    )
}

export default Block