import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dummyFollowersData, dummyFollowingData, dummyPendingConnectionsData } from '../../public/assets/assets';
import { MessageSquare, UserCheck, UserRoundPen, Users } from 'lucide-react';

const Connections = () => {
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState('Followers');

    const dataArray = [
        {label: 'Followers', value: dummyFollowersData, icon: Users},
        {label: 'Following', value: dummyFollowingData, icon: UserCheck},
        {label: 'Pending', value: dummyPendingConnectionsData, icon: UserRoundPen},
    ]

    return (
        <div className='min-h-screen bg-[#0F172A]'>
            <div className='max-w-6xl mx-auto p-6'>
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-[#F1F5F9] mb-2'>Connections</h1>
                    <p className='text-[#94A3B8]'>Manage your network and discover new people.</p>
                </div>

                <div className='mb-8 flex flex-wrap gap-6'>
                    {dataArray.map((item, index) => (
                        <div key={index} className='flex flex-col items-center justify-center gap-1 border h-20 w-40 border-[#1F2937] bg-[#1E293B] shadow rounded-md'>
                            <b className='text-[#F1F5F9]'>{item.value.length}</b>
                            <p className='text-[#94A3B8]'>{item.label}</p>
                        </div>
                    ))}
                </div>

                <div className='inline-flex flex-wrap items-center border border-[#1F2937] rounded-md p-1 bg-[#1E293B] shadow-sm'>
                    {dataArray.map((tab) => (
                        <button onClick={() => setCurrentTab(tab.label)} key={tab.label} className={`flex items-center px-3 py-1 text-sm rounded-md transition-colors cursor-pointer ${currentTab === tab.label ? 'bg-[#1D4ED8] font-medium text-[#F1F5F9]' : 'text-[#64748B] hover:text-[#94A3B8]'}`}>
                            <tab.icon className='w-4 h-4'/>
                            <span className='ml-1'>{tab.label}</span>
                            {tab.count !== undefined && <span className='ml-2 text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full'>{tab.count}</span>}
                        </button>
                    ))}
                </div>

                <div className='flex flex-wrap gap-6 mt-6'>
                    {dataArray.find((item) => item.label === currentTab).value.map((user) => (
                        <div key={user._id} className='w-full max-w-88 flex gap-5 p-6 bg-[#1E293B] shadow rounded'>
                            <img 
                                src={user.profile_picture} 
                                alt="" 
                                className='rounded-full w-12 h-12 shadow-md mx-auto'
                            />
                            <div className='flex-1'>
                                <p className='font-medium text-[#F1F5F9]'>{user.full_name}</p>
                                <p className='text-[#94A3B8]'>@{user.username}</p>
                                <p className='text-sm text-[#94A3B8]'>{user.bio.slice(0, 30)}...</p>
                                <div className='flex max-sm:flex-col gap-2 mt-4'>
                                    {
                                        <button onClick={() => navigate(`/profile/${user._id}`)} className='w-full p-2 text-sm rounded bg-[#3B82F6] hover:bg-[#2563EB] active:scale-95 transition text-white cursor-pointer'>
                                            View profile
                                        </button>
                                    }
                                    {currentTab === 'Following' && (
                                        <button className='w-full p-2 text-sm rounded bg-slate-100 hover:bg-slate-200 text-black active:scale-95 transition cursor-pointer'>
                                            Unfollow
                                        </button>
                                    )}
                                    {currentTab === 'Pending' && (
                                        <button className='w-full p-2 text-sm rounded bg-slate-100 hover:bg-slate-200 text-black active:scale-95 transition cursor-pointer'>
                                            Accept
                                        </button>
                                    )}
                                    {currentTab === 'Followers' && (
                                        <button onClick={() => navigate(`/messages/${user._id}`)} className='w-full p-2 text-sm rounded bg-slate-100 hover:bg-slate-200 text-slate-800 active:scale-95 transition cursor-pointer flex items-center justify-center gap-1'>
                                            <MessageSquare className='w-4 h-4'/>
                                            Message
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Connections
