import { FaEnvelope, FaLock } from 'react-icons/fa6'

export default function Login() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-100 px-4'>
      <div className='grid w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-2'>
        <div className='flex min-h-[520px] flex-col justify-center bg-gradient-to-br from-blue-700 to-indigo-900 p-10 text-white'>
          <img src='https://www.wscubetech.com/images/ws-cube-white-logo.svg' alt='WsCube Tech' className='mb-10 w-52' />
          <div className='text-4xl font-bold'>Admin Panel</div>
          <div className='mt-4 text-lg text-blue-100'>Manage your website content from one place.</div>
        </div>
        <div className='flex min-h-[520px] flex-col justify-center p-10'>
          <div className='text-3xl font-bold text-slate-900'>Welcome Back</div>
          <div className='mb-8 mt-2 text-slate-500'>Login to your admin account</div>
          <div id='login-email' className='mb-5'>
            <label className='mb-2 block font-medium'>Email Address</label>
            <div className='flex items-center rounded-lg border border-slate-300 px-3'><FaEnvelope className='text-slate-400' /><input type='email' placeholder='Enter email address' className='w-full border-0 px-3 py-3 outline-none' /></div>
          </div>
          <div id='login-password' className='mb-5'>
            <label className='mb-2 block font-medium'>Password</label>
            <div className='flex items-center rounded-lg border border-slate-300 px-3'><FaLock className='text-slate-400' /><input type='password' placeholder='Enter password' className='w-full border-0 px-3 py-3 outline-none' /></div>
          </div>
          <div className='mb-7 flex items-center justify-between text-sm'><label className='flex items-center gap-2'><input type='checkbox' /> Remember me</label><span className='text-blue-700'>Forgot Password?</span></div>
          <button type='button' className='rounded-lg bg-blue-700 py-3 font-semibold text-white'>Login</button>
        </div>
      </div>
    </div>
  )
}
