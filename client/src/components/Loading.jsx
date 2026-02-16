import { LoaderCircle } from 'lucide-react'
import React from 'react'

const Loading = ({height = '100vh'}) => {
    return (
        <div style={{height}} className='flex items-center justify-center h-screen'>
            <LoaderCircle className='animate-spin text-purple-500' size={60}/>
        </div>
    )
}

export default Loading
