import React, { useState } from 'react'
import { dummyConnectionsData } from '../../public/assets/assets'
import { Search } from 'lucide-react'
import UserCard from '../components/UserCard'
import Loading from '../components/Loading'

const Discover = () => {
    const [input, setInput] = useState('')
    const [users, setUsers] = useState(dummyConnectionsData)
    const [loading, setLoading] = useState(false)

    const handleSearch = async (e) => {
        if (e.key === 'Enter') {
            setUsers([])
            setLoading(true)
            setTimeout(() => {
                setUsers(dummyConnectionsData)
                setLoading(false)
            }, 1000)
        }
    }

    return (
        <div className='min-h-screen bg-[#0F172A]'>
            <div className='max-w-6xl mx-auto p-6'>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-[#F1F5F9] mb-2'>Discover new people.</h1>
                    <p className='text-[#94A3B8]'>Discover and talk to new people.</p>
                </div>

                <div className='mb-8 shadow-md rounded-md  bg-[#3B82F6]/80'>
                    <div className='p-6'>
                        <div className='relative'>
                            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F1F5F9] w-5 h-5'/>
                            <input 
                                type="text" 
                                placeholder='Search people by name, username, bio, or location...' 
                                className='pl-10 sm:pl-12 py-2 w-full rounded-md max-sm:text-sm border border-[#1F2937] text-[#F1F5F9]' 
                                onChange={(e) => setInput(e.target.value)} 
                                value={input} 
                                onKeyUp={handleSearch}
                            />
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap gap-6'>
                    {users.map((user) => (
                        <UserCard user={user} key={user._id}/>
                    ))}
                </div>

                {loading && (<Loading height='60vh'/>)}
            </div>
        </div>
    )
}

export default Discover
