'use client'
import MessageList from '@/components/chat/messagelist';
import AddMessageField from '@/components/chat/textfield';
import { useStateContext } from '@/state/provider';
import React from 'react'

function page() {
    const { states, activeStateId, addMessage, setActiveState, createNewState } = useStateContext();
    return (
        <div className='flex grow w-screen bg-'>
            <div className='flex flex-col bg-white w-[20vw] place-items-center'>
                <p>Your recent searches</p>
                {states.map((re) => <p>{re.title}</p>)}
            </div>
            <div className=' w-full px-4  flex flex-col'>
            <MessageList/>
            <AddMessageField/>
            </div>
        </div>
    )
}



export default page