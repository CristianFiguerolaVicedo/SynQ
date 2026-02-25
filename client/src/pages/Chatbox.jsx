import React, { useEffect, useRef, useState } from 'react'
import { dummyMessagesData, dummyUserData } from '../../public/assets/assets'
import { Image, ImageIcon, Send, SendHorizonal } from 'lucide-react'

const Chatbox = () => {
    const messages = dummyMessagesData
    const [text, setText] = useState('')
    const [image, setImage] = useState(null)
    const [user, setUser] = useState(dummyUserData)
    const messageEndRef = useRef(null)

    const sendMessage = async () => {

    }

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return user && (
        <div className='flex flex-col h-screen'>
            <div className='flex items-center gap-2 p-2 md:px-10 xl:pl-42 bg-[#1E293B] border-b border-[#1F2937]'>
                <img 
                    src={user.profile_picture} 
                    alt="" 
                    className='size-8 rounded-full'
                />
                <div className=''>
                    <p className='font-medium text-[#F1F5F9]'>{user.full_name}</p>
                    <p className='text-xs text-[#94A3B8] -mt-1.5'>@{user.username}</p>
                </div>
            </div>

            <div className='p-5 md:px-10 h-full overflow-y-scroll bg-[#0F172A]'>
                <div className='space-y-4 max-w-4xl mx-auto'>
                    {messages.toSorted((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).map((message, index) => (
                        <div key={index} className={`flex flex-col ${message.to_user_id !== user._id ? 'items-start' : 'items-end'}`}>
                            <div className={`p-2 text-sm max-w-sm text-[#F1F5F9] rounded-lg shadow ${message.to_user_id !== user._id ? 'rounded-bl-none bg-[#3B82F6]' : 'rounded-br-none bg-[#1D4ED8]'}`}>
                                {message.message_type === 'image' && 
                                    <img 
                                        src={message.media_url} 
                                        alt="" 
                                        className='w-full max-w-sm rounded-lg mb-1'
                                    />
                                }
                                <p>{message.text}</p>
                            </div>
                        </div>
                    ))}

                    <div ref={messageEndRef} />
                </div>
            </div>

            <div className='px-4 bg-[#0F172A]'>
                <div className='flex items-center gap-3 pl-5 p-1.5 bg-[#1E293B] w-full max-w-xl mx-auto border border-gray-200 shadow rounded-full mb-5'>
                    <input 
                        type="text" 
                        className='flex-1 outline-none text-[#F1F5F9]'
                        placeholder='Type a message...' 
                        onKeyDown={e => e.key === 'Enter' && sendMessage()} 
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />
                    <label htmlFor="image">
                        {image ? 
                            <img 
                                src={URL.createObjectURL(image)} 
                                alt=""
                                className='h-8 rounded' 
                            />
                            :
                            <ImageIcon className='size-7 text-gray-400 cursor-pointer'/>
                        }
                        <input type="file" id='image' accept='image/*' hidden onChange={(e) => setImage(e.target.files[0])}/>
                    </label>
                    <button onClick={sendMessage} className='bg-[#3B82F6] hover:bg-[#2563EB] active:scale-95 cursor-pointer text-white p-2 rounded-full'>
                        <SendHorizonal size={18}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Chatbox
