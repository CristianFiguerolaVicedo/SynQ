import React from 'react'
import { dummyUserData } from '../../public/assets/assets'
import { MapPin, MessageCircle, Plus, UserPlus } from 'lucide-react'

const UserCard = ({user}) => {
    const currentUser = dummyUserData

    const handleFollow = async () => {

    }

    const handleConnectionRequest = async () => {
        
    }

    return (
        <div key={user._id} className='p-4 pt-6 flex flex-col justify-between w-72 shadow border border-[#1F2937] rounded-md bg-[#1E293B]'>
            <div className='text-center'>
                <img 
                    src={user.profile_picture} 
                    alt="" 
                    className='rounded-full w-16 shadow-md mx-auto'
                />
                <p className='mt-4 font-semibold text-[#F1F5F9]'>{user.full_name}</p>
                {user.bio && <p className='text-[#94A3B8] mt-2 text-center text-sm px-4'>@{user.bio}</p>}
            </div>

            <div className='flex items-center justify-center gap-2 mt-4 text-xs text-[#94A3B8]'>
                <div className='flex items-center gap-1 border border-[#94A3B8] rounded-full px-3 py-1'>
                    <MapPin className='w-4 h-4'/> {user.location}
                </div>
                <div className='flex items-center gap-1 border border-[#94A3B8] rounded-full px-3 py-1'>
                    <span>{user.followers.length}</span> Followers
                </div>
            </div>

            <div className='flex mt-4 gap-2'>
                <button onClick={handleFollow} disabled={currentUser?.following.includes(user._id)} className='w-full py-2 rounded-md flex justify-center items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] active:scale-95 transition text-[#F1F5F9] cursor-pointer'>
                    <UserPlus className='w-4 h-4'/> {currentUser?.following.includes(user._id) ? 'Following' : 'Follow'}
                </button>
                <button onClick={handleConnectionRequest} className='flex items-center justify-center w-16 border border-[#94A3B8] text-[#94A3B8] group rounded-md cursor-pointer active:scale-95 transition'>
                    {currentUser?.connections.includes(user._id) ? <MessageCircle className='w-5 h-5 group-hover:scale-105 transition'/> : <Plus className='w-5 h-5 group-hover:scale-105 transition'/>}
                </button>
            </div>
        </div>
    )
}

export default UserCard
