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
        <div className='w-full max-w-md rounded-3xl border border-emerald-500/20 bg-[#0f1721]/80 p-10 shadow-[0_20px_60px_rgba(6,12,22,0.6)] backdrop-blur'>
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
                    className='outline-none bg-[#0b1220] border border-white/10 font-medium text-base py-2 px-4 rounded-xl placeholder:text-gray-500 focus:border-emerald-400/60' type="email" placeholder='admin@example.com'
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
                    className='outline-none bg-[#0b1220] border border-white/10 font-medium text-base py-2 px-4 rounded-xl placeholder:text-gray-500 focus:border-emerald-400/60' type="password" placeholder='••••••••' />
                </div>
                <button className='mt-2 text-slate-900 border-none outline-none hover:bg-emerald-400 font-semibold bg-emerald-500 text-base py-2.5 px-6 w-full rounded-xl'>Log in</button>
            </form>
            <div className='mt-6 text-xs text-gray-500'>
                Admin: admin@example.com / 123
            </div>
        </div>
    </div>
  )
}

export default Login