'use client'
import EngineLogo from '@/pattern/shared/icons/engine';
import SterlingLogoOnly from '@/pattern/shared/icons/sterling-logo2';
import { useStateContext } from '@/state/provider';
import { User } from '@heroui/react';
import React from 'react'

function ChatBotHeader() {
    const { states, activeStateId, addMessage, setActiveState, createNewState } = useStateContext();
    const activeState = states.find((state) => state.id === activeStateId);

    return (


        <div className=' py-5 bg-white border-b-1 border-navBorder'>
            <div className=' flex flex-row mx-auto container  place-items-center'>
                <div className='flex w-fit'>
                    <SterlingLogoOnly />
                    <p className=" font-medium text-subHeading text-[1.5rem]">One<span className="font-BalloBhaina text-primary_color font-normal">Prompt</span></p>
                </div>
                <div className='flex place-items-center ml-20 '>
                    <EngineLogo />  <p className="text-sidebarSub ml-1 text-[1.1rem] font-inter">{activeState?.title}</p>
                </div>
                <div className='flex-1' />
                <User
                    classNames={{
                        "description": ["font-inter", "text-[1rem] font-normal text-sidebarSub"],
                        "name": ["font-inter", "text-[1rem] font-bold text-sidebarHeading  leading-none "],
                    }}
                    avatarProps={{
                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                    description="Product Designer"
                    name="Jane Doe"
                />
            </div>
        </div>
    )
}

export default ChatBotHeader