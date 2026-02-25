import React from 'react'
import { dummyUserData } from '../../public/assets/assets'
import { Pencil } from 'lucide-react'

const ProfileModal = ({setShowEdit}) => {
    const user = dummyUserData
    const [editForm, setEditForm] = React.useState({
        username: user.username,
        bio: user.bio,
        location: user.location,
        profile_picture: null,
        full_name: user.full_name,
        cover_photo: null
    })

    const handleSaveProfile = async (e) => {
        e.preventDefault()
    }

    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-110 h-screen overflow-y-scroll bg-black/50'>
            <div className='max-w-2xl sm:py-6 mx-auto'>
                <div className='bg-[#0F172A] rounded-lg shadow p-6'>
                    <h1 className='text-2xl font-bold text-[#F1F5F9] mb-6'>Edit Profile</h1>

                    <form className='space-y-4' onSubmit={handleSaveProfile}>
                        <div className='flex flex-col items-start gap-3'>
                            <label htmlFor="profile_picture" className='block text-sm font-medium text-[#94A3B8] mb-1'>
                                Profile Picture
                                <input 
                                    hidden
                                    type="file" 
                                    accept='image/*' 
                                    id='profile_picture' 
                                    className='w-full p-3 border border-gray-200 rounded-lg' 
                                    onChange={(e) => setEditForm({...editForm, profile_picture: e.target.files[0]})}
                                />
                                <div className='relative group w-24 h-24'>
                                    <img 
                                        src={editForm.profile_picture ? URL.createObjectURL(editForm.profile_picture) : user.profile_picture}
                                        alt="" 
                                        className='w-24 h-24 rounded-full object-cover mt-2'
                                    />

                                    <div className='absolute inset-0 hidden group-hover:flex bg-black/20 rounded-full items-center justify-center cursor-pointer'>
                                        <Pencil className='w-5 h-5 text-white'/>
                                    </div>
                                </div>
                            </label>
                        </div>

                        <div className='flex flex-col items-start gap-3'>
                            <label htmlFor="cover_photo" className='block text-sm font-medium text-[#94A3B8] mb-1'>
                                Cover Photo
                                <input 
                                    hidden
                                    type="file" 
                                    accept='image/*' 
                                    id='cover_photo' 
                                    className='w-full p-3 border border-gray-200 rounded-lg' 
                                    onChange={(e) => setEditForm({...editForm, cover_photo: e.target.files[0]})}
                                />

                                <div className='group/cover relative'>
                                    <img 
                                        src={editForm.cover_photo ? URL.createObjectURL(editForm.cover_photo) : user.cover_photo} 
                                        alt="" 
                                        className='w-80 h-40 rounded-lg bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 object-cover mt-2'
                                    />

                                    <div className='absolute hidden group-hover/cover:flex top-0 left-0 right-0 bottom-0 bg-black/20 rounded-lg items-center justify-center cursor-pointer'>
                                        <Pencil className='w-5 h-5 text-white'/>
                                    </div>
                                </div>
                            </label>
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-[#94A3B8] mb-1'>
                                Name
                            </label>
                            <input 
                                type="text" 
                                className='w-full p-3 border border-gray-200 rounded-lg text-[#94A3B8]' 
                                placeholder='Please enter your full name' 
                                onChange={(e) => setEditForm({...editForm, full_name: e.target.value})} 
                                value={editForm.full_name}
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-[#94A3B8] mb-1'>
                                Username
                            </label>
                            <input 
                                type="text" 
                                className='w-full p-3 border border-gray-200 rounded-lg text-[#94A3B8]' 
                                placeholder='Please enter your username' 
                                onChange={(e) => setEditForm({...editForm, username: e.target.value})} 
                                value={editForm.username}
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-[#94A3B8] mb-1'>
                                Bio
                            </label>
                            <textarea
                                rows={3}
                                className='w-full p-3 border border-gray-200 rounded-lg text-[#94A3B8]' 
                                placeholder='Please enter a short bio' 
                                onChange={(e) => setEditForm({...editForm, bio: e.target.value})} 
                                value={editForm.bio}
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-[#94A3B8] mb-1'>
                                Location
                            </label>
                            <input 
                                type="text" 
                                className='w-full p-3 border border-gray-200 rounded-lg text-[#94A3B8]' 
                                placeholder='Please enter your location' 
                                onChange={(e) => setEditForm({...editForm, location: e.target.value})} 
                                value={editForm.location}
                            />
                        </div>

                        <div className='flex justify-end space-x-3 pt-6'>
                            <button
                                onClick={() => setShowEdit(false)}
                                type='button'
                                className='px-4 py-2 border border-gray-300 rounded-lg text-[#94A3B8] hover:bg-gray-50 transition-colors cursor-pointer'
                            >
                                Cancel
                            </button>

                            <button
                                type='submit'
                                className='px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-[#2563EB] transition cursor-pointer'
                            >
                                Save changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileModal
