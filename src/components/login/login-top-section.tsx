'use client'
import SterlingLogo from '@/pattern/shared/icons/sterling-logo'
import { Button } from '@heroui/react'
import React from 'react'
import OutlinedButton from '../button'

function LoginTopSection() {
  return (
    <div className="flex place-content-between w-full">
    <SterlingLogo className="fill-logoTint"/>
    
    <OutlinedButton onClick={()=> {}} > Login </OutlinedButton>

  </div>
  )
}

export default LoginTopSection