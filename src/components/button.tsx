import React, { ReactNode } from 'react'

interface IButtonProps {
    children: ReactNode,
    onClick: () => void
}

function OutlinedButton(props: IButtonProps) {
    return (
        <div onClick={props.onClick} className='px-12 py-2 hover:bg-red-100 cursor-pointer border-primary_color border-1.5 rounded-2xl text-primary_color text-[1.125rem] font-bold'>
            {props.children}
        </div>
    )
}

export default OutlinedButton