import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center px-6'>
        <div className='w-full max-w-md rounded-2xl border border-emerald-500/30 bg-[#0f1721]/70 p-10 shadow-[0_0_40px_rgba(20,184,166,0.15)] backdrop-blur'>
            <div className='mb-8 text-center'>
                <h1 className='text-3xl font-semibold'>Welcome back</h1>
                <p className='text-sm text-gray-400'>Sign in to manage employees and tasks</p>
            </div>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col gap-4'
            >
                <div className='flex flex-col gap-1'>
                    <label className='text-xs uppercase tracking-widest text-gray-400'>Email</label>
                    <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required 
                    className='outline-none bg-transparent border border-emerald-600/60 font-medium text-base py-2 px-4 rounded-lg placeholder:text-gray-500' type="email" placeholder='admin@example.com'
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-xs uppercase tracking-widest text-gray-400'>Password</label>
                    <input
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required 
                    className='outline-none bg-transparent border border-emerald-600/60 font-medium text-base py-2 px-4 rounded-lg placeholder:text-gray-500' type="password" placeholder='••••••••' />
                </div>
                <button className='mt-2 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-base py-2.5 px-6 w-full rounded-lg'>Log in</button>
            </form>
            <div className='mt-6 text-xs text-gray-500'>
                Admin: admin@example.com / 123
            </div>
        </div>
    </div>
  )
}

export default Login