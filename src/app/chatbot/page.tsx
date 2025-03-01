'use client'
import MessageList from '@/components/chat/messagelist';
import AddMessageField from '@/components/chat/textfield';
import { useStateContext } from '@/state/provider';
import React from 'react'

function page() {
    const { engines, activeEngineId, activeStateId } = useStateContext();
    const activeEngine = engines.find((engine) => engine.engineId === activeEngineId);
    const activeState = activeEngine?.searchHistory.find((state) => state.id === activeStateId);
  
    if (!activeState) {
      return <div>Please select a chat session to view messages.</div>;
    }
    return (
        <div className='flex grow w-screen bg-'>
            <div className='flex flex-col bg-white w-[20vw] place-items-center'>
                <p>Your recent searches</p>
                {activeEngine?.searchHistory.map((re) => <p>{re.title}</p>)}
            </div>
            <div className=' w-full px-4  flex flex-col'>
            <MessageList/>
            <AddMessageField/>
            </div>
        </div>
    )
}



export default page