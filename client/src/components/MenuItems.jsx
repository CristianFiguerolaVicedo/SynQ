import React from 'react'
import { menuItemsData } from '../../public/assets/assets'
import { NavLink } from 'react-router-dom'

const MenuItems = ({setSidebarOpen}) => {
    return (
        <div className='px-6 text-gray-600 space-y-1 font-medium'>
            {menuItemsData.map(({to, label, Icon}) => (
                <NavLink key={to} to={to} end={to == '/'} onClick={() => setSidebarOpen(false)} className={({isActive}) => `text-[#94A3B8] px-3.5 py-2 flex items-center gap-3 rounded-xl ${isActive ? 'bg-[#1D4ED8] text-[#F1F5F9]' : 'hover:bg-[#2563EB]'}`}>
                    <Icon className='w-5 h-5'/>
                    {label}
                </NavLink>
            ))}
        </div>
    )
}

export default MenuItems
